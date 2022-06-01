import React, { useState } from 'react';
import Posts from './components/Posts';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Deepeksh",
      caption: "Hello",
      imgURL: "https://picsum.photos/1920/1080"
    },
    {
      username: "Deepeksh",
      caption: "Hello",
      imgURL: "https://picsum.photos/1920/1080"
    }
  
  ]);

  function post(props){
    return ( <Posts
                username={props.username}
                caption ={props.caption}
                imgURL  ={props.imgURL}
          />)
  }

  return (
<div className='app'>
  
    <div className='app_header'>
      <img className='app_header_img' src='..\Images\Instagram_logo.png' alt=''/>
    </div>
  
    <h1>hello world</h1>

    {
      posts.map(post)
    }


    </div>
  );
}

export default App;
