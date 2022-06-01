import React, { useState } from 'react';
import Posts from './components/Posts';
import './styles/App.css';
import {db} from "./firebase"
import { collection, getDoc, addDoc, onSnapshot } from 'firebase/firestore';

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

  // useEffect(() => {
    // const CollectionRef = collection(db, "posts").onSnapshot(snapshot => {
    //   setPosts(getDoc(CollectionRef)
    //   .then((Response)=> {setPosts(Response.docs.map((item)=>{
    //     return {...item.data(), id: item.id}
    //   }))}))
    // } );
    // db.collection("posts").on
  //   return () => {
  //     second
  //   }
  // }, [third])
  

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
