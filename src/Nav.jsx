import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Nav = () =>{
  return(
    <div>
      <h1>Logo</h1>
      <div>
        <Link to="/">Product</Link>
        <Link to="/post">Post</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}
export default Nav;