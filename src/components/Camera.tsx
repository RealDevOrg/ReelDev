import {
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Camera = () => {
  useEffect(()=> {
    navigator.mediaDevices
    .getUserMedia({ video: true})
    .then((stream) => {
      const video = document.getElementById('preview');
      video.srcObject = stream;
      video.play();
      })
      .catch((err) => {
        console.log('ERRORRR!!!!')
        console.log(err);
      });
  }), [];

    const navigate = useNavigate();
    const takeMeHome = () => {
        navigate('/');
    }

    // const width = video.width; // We will scale the photo width to this
    // const height = video.height
    
    const snap = (e) => {
      const video = document.getElementById('preview');
      console.log('snap function is fired');
      //take screenshot
      window.electronAPI.takeScreenshot();
      //take photo
      // Create canvas to take photo
      const canvas = document.getElementById('canvas') 
      //  canvas.width = video.videoWidth
      //  canvas.height = video.videoHeight
      const context = canvas.getContext("2d");
      // if (width && height) {
      canvas.width = video.width;
      canvas.height = video.height;
      context.drawImage(video, 0, 0, width, height);

      const photo = document.getElementById('photo-image')
      const data = canvas.toDataURL();
      photo.setAttribute("src", data);
      // } 
    // else {
        // clearphoto();
      // }
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
        <div className="photo" id="photo" style={{display: 'flex', width: '500px', }}>
            <video width="400" height="300" id='preview' src=''></video>
            <canvas id="canvas" style={{display: 'none'}}> </canvas>
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