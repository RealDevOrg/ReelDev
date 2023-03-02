//this is where the feed will populate all the posts
/** user/feed () ->
        recieve [an array of post info?]
        [{caption: string, timestamp: Date, screenshot: [], face: []}]

        on each card add a button to open comments
        - view(?) comments = post/comment (text, _postID)
            - sub button to add comment: 
                - add(?) comment = post/getcomments (_postID) -> [{text: string, timestamp: Date, _userID}]
 */
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField
} from '@mui/material';
import Post from './Post';

const Feed = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    const getFeed = async () => {
      try {
        const res = await fetch('http://localhost:3030/post/feed');
        const feedData = await res.json();
        // console.log(feedData[0]);
        setFeed(feedData.filter(post => post._id > 2 ));
      } catch (err) {
        console.log('issue getting feed: ', err);
      }
    }
    getFeed();
  }, []);
    
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
      {feed.map(post => {
        const { username, caption, userimage, screenimage, timestamp, _id } = post; 
        return <Post username={username} caption={caption} userimage={userimage} screenimage={screenimage} timestamp={timestamp} id={_id}/>
      })}
      <br/>
      <Button variant='outlined' onClick={() => openCamera()}>CREATE A POST</Button>
    </div>
  )
};

export default Feed;