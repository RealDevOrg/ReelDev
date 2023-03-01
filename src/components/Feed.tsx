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

const Feed = () => {
    
  const navigate = useNavigate();

  const takeMeHome = () => {
    navigate('/');
  }
  const openCamera = () => {
    navigate('/camera');
  }
  
  return (
    <div>
      <button onClick={() => takeMeHome()}>Go To Landing Page</button>
      <h1>Feed Here!</h1>
      <p>Imagine some photos</p>
      
      <button onClick={() => openCamera()}>CREATE A POST</button>
    </div>
  )
};

export default Feed;