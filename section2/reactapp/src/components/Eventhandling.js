import React from 'react'; 
import { useState } from 'react';
const Eventhandling = () => {
    let x =10;
    const [count, setCount] = useState(0);
 
    const handle  = ()=> {
        console.log('hello')
        x++;
        console.log(x);
 }
        return (
    <div className='container'>
       <h1>  Eventhandling</h1>
       <h2>  click me </h2>
       <button  className='btn btn-primary' onClick={(e) =>{ alert('you clicked')}}>  handle event  </button>
       <button  className='btn btn-danger' onClick={handle}>  passing define function  </button>
       <h1>{x}</h1>
       <button className='btn btn-primary' onClick={()=> {setCount(count+1);}}>updating state 
       </button>
       <h1>{count}</h1>
       <h2> change event</h2>
       <div  className='input-group'>

        <input className='form-control' onChange={(e)=>{ console.log(e.target.value)}} />
        <button className='btn btn-primary'>send</button>
        <input className='form-control' type='file' onChange={(e)=>{ console.log(e.target.files)}} />

       </div>

    </div>
  )
}
export default Eventhandling;
