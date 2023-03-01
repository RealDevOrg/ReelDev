// import ReactDOM from 'react-dom';
// import React from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField
} from '@mui/material';

// user/signup (username, password) -> backend attachs cookie

const SignUp = () => {
    const [formData, setFormData] = useState({ 
        username: '',
        password: ''
     })
    const navigate = useNavigate();
    const { username, password } = formData;

    const onChange = event => setFormData({
        ...formData, [event.target.name]:event.target.value
    })
    console.log('username :', username);

    // const onClick = formData => {
    //    //user/signup (username, password)
    //    const { username, password } = formData;
    //    fetch('user/signup', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type':'application/json'
    //     },
    //     body: {
    //         username: username, 
    //         password: password
    //     }
    //    })
    //    .then(res => {
    //     //send to feed
    //     return redirect("/feed")
    //    })
    //    .catch(err => {
    //     //shucks mcducks
    //    })
    
    // }
    const onClick = () => {
        navigate('/feed')
    }

    return (
        <div className='container'>
        <h1>Howdy, create your profile!</h1>
        <form>
            <TextField type="text"placeholder="Username"
            name="username" value={username} onChange={event => onChange(event)}>
            </TextField>
            <TextField type="text"placeholder="Password"
            name="password" value={password} onChange={event => onChange(event)}>
            </TextField>
            <br/>
            <Button variant='contained' type='submit' className='bttn' onClick={() => onClick()} >Create!</Button>
        </form>
        <br/>
        <Button variant='outlined' className='bttn' onClick={()=>takeMeHome()}>Go to login page</Button>
    </div>
    )
}


export default SignUp;