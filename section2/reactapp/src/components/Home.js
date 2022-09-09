//  component is a js function and we also create component with class 
//  component are reusable
//  function should always start with upper case 
// always return single jsx element
//  function should be exported
import React from 'react';
import'./Home.css';

const Home = () => {
  return (
    <div>
        <h1  className="head1" style={ { color:'red', backgroundColor:'yellow'}  }> my home component</h1>
        <button className="btn btn-danger"> submit </button>
        {/* <nav className='nave'>
          <a href="/home" className='navitem'> Home</a>
          <a href="/ NotFound" className='navitem'> not found</a>
          <a href="#" className='navitem'> About </a>
          <a href="/login" className='navitem'> Login </a>

        </nav> */}
        
    </div> 
  );
} 

export default Home;