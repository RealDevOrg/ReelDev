import React from 'react';
import {
    Button,
    TextField
  } from '@mui/material';
// import dragonite from '../assets/dragonite.png';

const Post = ({username, caption, userimage, screenimage, timestamp, id}) => {
    if (screenimage && !screenimage.startsWith('data:image/jpeg;base64, ')) {
      screenimage = `data:image/jpeg;base64, ${screenimage}`
    }
    return (
        <div className="Post" style={{color: "hotPink", backgroundColor: "lightCyan"}}>
        <img style={{height: '450px', width: 'auto'}} src={screenimage} alt="Dragonite"></img>
        {/* <h4>💖!Example Post!💖</h4> */}
        <h4>{username}</h4>
        <h4>{caption}</h4>
        <h4>{timestamp}</h4>
        <Button variant='outlined' id='viewComment' >Comments</Button>
  </div>
    )
}

export default Post;
   