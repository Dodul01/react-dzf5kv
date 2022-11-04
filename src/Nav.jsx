import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Nav = () =>{
  return(
    <nav>
      <h1>SurfeBee</h1>
      <div>
        <Link to="/">About</Link>
        <Link to="/product">Product</Link>
      </div>
    </nav>
  )
} 
export default Nav;