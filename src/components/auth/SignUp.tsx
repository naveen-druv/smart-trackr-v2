import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../../slice/user/userSlice';
import { Avatar } from '../ui/Avatar';
const SignUp: React.FC = () => {
  return <FormContainer>SignUp</FormContainer>;
};

const FormContainer = styled.div`
  background-color: 1px solid lightblue;
  height: 100%;
  width: 80%;
`;
export default SignUp;
