import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../../slice/user/userSlice';
import { Avatar } from '../ui/Avatar';
import { GoogleFormInput } from '../ui/input/GoogleFormInput';
import { Button } from '../ui/buttons/Button';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { firebaseAuth, firestoreDb } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const handleSignUp = async () => {
    if (!email || !password || !firstName || !lastName || !dob) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');

    try {
      const response = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      ); // Update display name
      await updateProfile(response.user, {
        displayName: `${firstName} ${lastName}`,
      });

      // Store additional user data in Firestore
      await setDoc(doc(firestoreDb, 'users', response.user.uid), {
        uid: response.user.uid,
        email,
        firstName,
        lastName,
        dob,
        createdAt: new Date().toISOString(),
      });

      console.info('✅ User successfully registered:', response.user.email);
      alert('Registration successful!');
    } catch (error: any) {
      console.error('SignUp error:', error);
      setError(error.message);
    }
  };
  return (
    <FormContainer>
      {error && <Error>{error}</Error>}
      <GoogleFormInput
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        label='Email'
      />
      <GoogleFormInput
        type='date'
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
        label='Date of Birth'
      />
      <RowContainer>
        <GoogleFormInput
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          label='First Name'
        />
        <GoogleFormInput
          type='text'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          label='Last Name'
        />
      </RowContainer>
      <RowContainer>
        <GoogleFormInput
          type='password'
          label='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <GoogleFormInput
          type='password'
          label='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </RowContainer>
      <Button purpose='primary' value='Sign Up' onClick={handleSignUp} />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  background-color: 1px solid lightblue;
  height: 100%;
  width: 80%;
`;
const RowContainer = styled.div`
  display: flex;
`;
const Error = styled.div`
  color: #ff4d4d;
  margin-bottom: 1rem;
`;
export default SignUp;
