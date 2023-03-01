//login page
// user/signin (username, password) -> backend assigns a cookie
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField
} from '@mui/material';

const loginPage = () => {
  // const [loggedIn, setLoggedIn] = useState(false); // lillian
  const navigate = useNavigate();

  const goToFeed = () => {
    navigate('/feed')
  }
  const goToSignUp = () => {
    navigate('/signup')
  }
  // lillian
  // const verifyUser = (event) => {
  //   console.log('verifyUser');
  //   axios.post('user/login', {
  //     username: username.value, 
  //     password: password.value 
  //   })
  //     .then(res => {
  //       console.log(data);
  //       setLoggedIn(true);
  //     })
  //     .catch(error => console.log('Error : ', error.toJSON())); 
  // };


  return (
    <div className='container'>
      <h2>Let's log you in cutie 😉</h2>
      <form>
        <TextField type='text' placeholder='Username' name='username'/>
        <TextField type='text' placeholder='Password' name='password'/> 
        <br/>
        <Button variant='outlined' type='submit' className='loginBttn' onClick={() => goToFeed()}>
          Login
        </Button>
      </form>
      <br/>
      <h4> 🫢 Yikes! Don't have an account?!</h4>
      <Button variant='outlined' className='signUpBttn' onClick={() => goToSignUp()}>Sign up!</Button>
    </div>
  );
}

export default loginPage;