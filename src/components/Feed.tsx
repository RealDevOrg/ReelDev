//this is where the feed will populate all the posts
/** user/feed () ->
        recieve [an array of post info?]
        [{caption: string, timestamp: Date, screenshot: [], face: []}]

        on each card add a button to open comments
        - view(?) comments = post/comment (text, _postID)
            - sub button to add comment: 
                - add(?) comment = post/getcomments (_postID) -> [{text: string, timestamp: Date, _userID}]
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField
} from '@mui/material';
import Post from './Post';

const Feed = () => {
    
  const navigate = useNavigate();

  const takeMeHome = () => {
    navigate('/');
  }
  const openCamera = () => {
    navigate('/camera');
  }
  
  return (
    <div className='container'>
      <Button variant='outlined' onClick={() => takeMeHome()}>Go To Landing Page</Button>
      <h2>Feed Here!</h2>
      <Post />
      <br/>
      <Button variant='outlined' onClick={() => openCamera()}>CREATE A POST</Button>
    </div>
  )
};

export default Feed;