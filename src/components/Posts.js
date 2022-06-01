import React from 'react'
import '../styles/Posts.css';
import { Avatar } from '@mui/material';

export default function Posts({username, caption, imgURL}) {

  return (<div className="post">
    
        <div className="post_header">
            <Avatar
                className="post_avatar"
                alt={username}
                src="#"/>
        
        <h3>Username</h3>
        </div>
        {/* header > profile pic > username  */}
    
        <div><img className="post_img" alt="" src={imgURL}/></div>
        {/* image */}

        <h4 className="post_text"><strong>{username} </strong> {caption}</h4>
        {/* caption */}
        {/* comments */}
    </div>)
}
