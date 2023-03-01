import React from 'react';
import {
    Button,
    TextField
  } from '@mui/material';
// import dragonite from '../assets/dragonite.png';

const Post = () => {
    
    return (
        <div className="Post" style={{color: "hotPink", backgroundColor: "lightCyan"}}>
        {/* <img src={dragonite} alt="Dragonite"> </img> */}
        <h4>💖!Example Post!💖</h4>
        <h4>username = katie</h4>
        <h4>caption = working hard or hardly working amiright? lol! </h4>
        <Button variant='outlined' id='viewComment' >Comments</Button>
  </div>
    )
}

export default Post;
   