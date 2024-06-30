import axios from 'axios';
import React, { useState } from 'react'
import SinglePost from './SinglePost';

export default function PostsApi() {
  const [posts,setPosts] = useState([]);

  async function loadPosts(){
    let result  = await axios.get("https://dummyjson.com/posts");
    setPosts(result.data.posts)
  }

  return (
    <div>
        <button onClick={loadPosts}>Load Posts</button>
        <hr/>
        {
            posts.map(x=><SinglePost obj={x}/>)
        }
    </div>
  )
}
