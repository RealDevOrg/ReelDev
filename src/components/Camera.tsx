//window that opens the screenshot and camera -> send photo files to create Post element?
//take over current window vs create new window - which is easier? 
// import { desktopCapturer } from 'electron';
// const { desktopCapturer } = require('electron');
// // const Menu = remote();
import React, { useState, useRef } from "react";
// import "./App.scss";
import { useNavigate } from 'react-router-dom';
//import fs from 'fs'

const Camera = () => {
    const navigate = useNavigate();
    const takeMeHome = () => {
        navigate('/');
    }
    // function captureScreen() {
    //     desktopCapturer.getSources({ types: ['screen'] })
    //             .then( sources => {
    //                 document.getElementById('screenshot-image').src = sources[0].thumbnail.toDataURL() // The image to display the screenshot
    //             })
    // }
  // Get the available video sources
//   async function getVideoSources() {
//     const inputSources = await desktopCapturer.getSources({
//       types: ['window', 'screen']
//     });
//     const videoOptionsMenu = Menu.buildFromTemplate(
//       inputSources.map(source => {
//         return {
//           label: source.name,
//           click: () => selectSource(source)
//         };
//       })
//     );
//     let mediaRecorder; // MediaRecorder instance to capture footage
//     const recordedChunks = [];

//     // Change the videoSource window to record
//     async function selectSource(source) {

//       videoSelectBtn.innerText = source.name;

//       const constraints = {
//         audio: false,
//         video: {
//           mandatory: {
//             chromeMediaSource: 'desktop',
//             chromeMediaSourceId: source.id
//           }
//         }
//       };

//       // Create a Stream
//       const stream = await navigator.mediaDevices
//         .getUserMedia(constraints);

//       // Preview the source in a video element
//       videoElement.srcObject = stream;
//       videoElement.play();

//       // Create the Media Recorder
//       const options = { mimeType: 'video/webm; codecs=vp9' };
//       mediaRecorder = new MediaRecorder(stream, options);

//       // Register Event Handlers
//       mediaRecorder.ondataavailable = handleDataAvailable;
//       mediaRecorder.onstop = handleStop;
//     }
  // }


   
   
    
  return (
    <div className="Camera">
        <button onClick={()=>takeMeHome()}>Take me home</button>
        <h2>📸 Smile for the camera! 📸</h2>
        <div className="screenshot">
            <img id='screenshot-image' src=''></img>
        </div>
        <button onClick={() => captureScreen()}>Take Screenshot</button>
    </div>
  );
}

export default Camera;