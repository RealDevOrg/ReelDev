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
  const [loggedIn, setLoggedIn] = useState();
  
  const login = async () => {
    try {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      console.log(username, password);
      await fetch('http://localhost:3030/user/signin', {
        method: 'POST',
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ username, password }) 
      })
      navigate('/feed');
    } catch (e) {
      console.log('error: ', e);
      // alert('Incorrect user information.');
    }
  }
  const goToSignUp = () => {
    navigate('/signup')
  }
  // // lillian
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
        <TextField type='text' id='username' placeholder='Username' name='username'/>
        <TextField type='password' id='password' placeholder='Password' name='password'/> 
        <br/>
        <Button 
          variant='outlined' 
          type='submit' 
          className='loginBttn' 
          onClick={(e) => {
            // send post to server
            // await a response before going forward
            e.preventDefault();
            login();
            }}>
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