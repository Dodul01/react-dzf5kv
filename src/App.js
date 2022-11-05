import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Nav from './Nav';
import Product from './Product';
import Post from './Post';
import About from './About';

const App = () =>{
  return(
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Product />}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;