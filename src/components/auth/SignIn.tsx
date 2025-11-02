import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { setLoggedInUser } from '../../slice/userSlice';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );
      console.info('res: ', res);
      if (res.data.length) {
        const userResponse = res.data[0];
        dispatch(
          setLoggedInUser({
            email: userResponse.email,
            username: userResponse.email,
            firstName: userResponse.firstName,
            profilePhoto: userResponse.profilePhoto,
          })
        );
        navigate('/');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      {error && <Error>{error}</Error>}
      <Input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type='submit'>Sign In</Button>
    </Form>
  );
};

/* ===================== STYLES ===================== */
const Form = styled.form`
  display: flex;
  flex-direction: column;
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

export default SignIn;
