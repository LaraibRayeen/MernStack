import React from 'react'
import not from '../components/404.gif'
import './Notfound.css';

export const NotFound = () => {
  return (
    <div>
    <img className='notfound' src={not}/>
    </div>
  )
}
export default NotFound;
