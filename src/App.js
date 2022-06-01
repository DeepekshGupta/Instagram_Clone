import React, { useEffect, useState } from 'react';
import Posts from './components/Posts';
import './styles/App.css';
import {db} from "./firebase"
import { collection, getDoc, addDoc, onSnapshot } from 'firebase/firestore';

function App() {
  const [posts, setPosts] = useState([
    // {
    //   username: "Deepeksh",
    //   caption: "Hello",
    //   imgURL: "https://picsum.photos/1920/1080"
    // },
    // {
    //   username: "Deepeksh",
    //   caption: "Hello",
    //   imgURL: "https://picsum.photos/1920/1080"
    // }
  
  ]);


  function createItems(items){

    return items.data();
  }
  
  useEffect(() => {
    const CollectionRef = collection(db, "posts");
    onSnapshot(CollectionRef, (data) => {
      setPosts(data.docs.map(createItems));
    })
  }, [])
  


  
  

  function post(props){
    return ( <Posts
                key={props.id}
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
