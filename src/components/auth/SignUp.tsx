import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../../slice/user/userSlice';
import { Avatar } from '../ui/Avatar';
const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setProfilePhoto(e.target.files[0]);
  };

  const generateAvatar = () => {
    if (firstName && lastName)
      return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
    if (firstName) return firstName[0].toUpperCase();
    return 'U';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let photoUrl = '';
    if (profilePhoto) {
      const reader = new FileReader();
      reader.readAsDataURL(profilePhoto);
      reader.onloadend = async () => {
        photoUrl = reader.result as string;
        await submitUser(photoUrl);
      };
    } else {
      photoUrl = generateAvatar();
      await submitUser(photoUrl);
    }
  };

  const submitUser = async (photoUrl: string) => {
    try {
      const res = await axios.post('http://localhost:3001/users', {
        email,
        username,
        password,
        firstName,
        lastName,
        profilePhoto: photoUrl,
      });
      if (res.status === 201) {
        dispatch(setLoggedInUser(res.data));
        navigate('/');
      }
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {error && <Error>{error}</Error>}
      <AvatarPreview>
        <Avatar
          photo={
            profilePhoto ? URL.createObjectURL(profilePhoto) : generateAvatar()
          }
          size={80}
        />
      </AvatarPreview>
      <Input type='file' accept='image/*' onChange={handleFileChange} />
      <Input
        placeholder='Username*'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        placeholder='Email*'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        placeholder='Password*'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Input
        placeholder='First Name*'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <Input
        placeholder='Last Name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Button type='submit'>Sign Up</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding: 2rem;
`;
const Input = styled.input`
  padding: 0.8rem 1rem;
  margin: 0.8rem 0;
  border-radius: 6px;
  border: none;
  font-size: 1.2rem;
`;
const Button = styled.button`
  padding: 0.8rem 1rem;
  margin-top: 1rem;
  background-color: #ffea00;
  color: #000;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
const Error = styled.div`
  color: #ff4d4d;
  margin-bottom: 1rem;
`;
const AvatarPreview = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export default SignUp;
