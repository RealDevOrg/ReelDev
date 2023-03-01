//login page
// user/signin (username, password) -> backend assigns a cookie
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const loginPage = () => {

  const navigate = useNavigate();

  const goToFeed = () => {
    navigate('/feed')
  }
  const goToSignUp = () => {
    navigate('/signup')
  }


  return (
    <div className='loginWindow'>
      <h1>Let's log you in cutie</h1>
      <form>
        <input type='text' placeholder='Username' name='username'/>
        <br/>
        <input type='text' placeholder='Password' name='password'  /> 
        <br/>
        <button type='submit' className='loginBttn' onClick={() => goToFeed()}>
          Login
        </button>
      </form>
      <br/>
      <h3>Don't have an account?</h3>
      <button className='signUpBttn' onClick={() => goToSignUp()}>Sign up!</button>
    </div>
  );
}

export default loginPage;