//window that opens the screenshot and camera -> send photo files to create Post element?
//take over current window vs create new window - which is easier? 
// import { desktopCapturer } from 'electron';
// const { desktopCapturer } = require('electron');
// // const Menu = remote();
// import React, { useState, useRef } from "react";
import {
  Button
} from '@mui/material';
// import "./App.scss";
import { useNavigate } from 'react-router-dom';
// import fs from 'fs'

const Camera = () => {
    const navigate = useNavigate();
    const takeMeHome = () => {
        navigate('/');
    }
    const snap = (e) => {
        console.log('snap function is fired');
        window.electronAPI.takePhoto();
        window.electronAPI.takeScreenshot();
    }
    const send = () => {
      console.log('send function invoked')
    }
  return (
    <div className="Camera">
        <Button id='test' variant='outlined' onClick={()=>takeMeHome()}>Take me home</Button>
        <h2>📸 Smile for the camera! 📸</h2>
        <div className="screenshot" style={{display: 'flex', width: '500px', }}>
            <img id='screenshot-image' src=''></img>
        </div>
        <div className="photo" style={{display: 'flex', width: '500px', }}>
            <canvas id='preview'></canvas>
            <img id='photo-image' src=''></img>
        </div>
        <br/>
        <span></span>
          <Button variant='contained' onClick={(e) => snap(e)}>Snap</Button>
          <Button variant='contained' onClick={() => send()}>Post</Button>
    </div>
  );
}

export default Camera;