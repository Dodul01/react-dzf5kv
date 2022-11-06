import React,{useState,useEffect} from 'react';
import './style.css';

const Post = () =>{
  const [post, setPost] = useState([]);
  useEffect(()=>{
    const fetchPost = async ()=>{
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await response.json();
      setPost(data);
    }
    fetchPost();
  },[])
  
 return(
    <div>
      <h1>Post</h1>
      {post.map((post)=> <div key={post.id} className="post-card">
        <h4 className="title">{post.title}</h4>
        <p>{post.body}</p>
      </div>)}
    </div>
  )
}
export default Post;