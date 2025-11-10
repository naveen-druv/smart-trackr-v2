import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { setLoggedInUser } from '../../slice/user/userSlice';
import { GoogleFormInput } from '../ui/input/GoogleFormInput';
import { Button } from '../ui/buttons/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      console.info('SignIn/response: ', response);
      const userData: {
        email: string;
        displayName: string;
        phoneNumber: string;
        photoUrl: string;
      } = {
        email: response?.user?.email ?? '',
        displayName: response?.user?.displayName ?? '',
        phoneNumber: response?.user?.phoneNumber ?? '',
        photoUrl: response?.user?.photoURL ?? '',
      };
      console.info('SignIn/userData: ', userData);
      if (!error && email === userData.email) {
        dispatch(
          setLoggedInUser({
            email: userData.email,
            username: userData.email,
            firstName: userData.email,
            profilePhoto: userData.photoUrl,
          })
        );
        navigate('/');
      }
      // if(response?.user)
      // const res = await axios.get(
      //   `http://localhost:3001/users?email=${email}&password=${password}`
      // );
      // console.info('res: ', res);
      // if (res.data.length) {
      //   const userResponse = res.data[0];
      //   dispatch(
      //     setLoggedInUser({
      //       email: userResponse.email,
      //       username: userResponse.email,
      //       firstName: userResponse.firstName,
      //       profilePhoto: userResponse.profilePhoto,
      //     })
      //   );
      //   navigate('/');
      // } else {
      //   setError('Invalid credentials');
      // }
    } catch (error: any) {
      console.error('SignIn/catch/error: ', error);
      setError(error?.message);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        {error && <Error>{error}</Error>}
        <GoogleFormInput
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          label='Email'
        />
        <GoogleFormInput
          type='password'
          label='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type='submit'
          purpose='primary'
          value='Sign In'
          onClick={handleSubmit}
        />
      </Form>
    </FormContainer>
  );
};

/* ===================== STYLES ===================== */
const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;
const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const Error = styled.div`
  color: #ff4d4d;
  margin-bottom: 1rem;
`;

export default SignIn;
