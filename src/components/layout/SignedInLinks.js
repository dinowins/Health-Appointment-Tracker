import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className='right'>
      <li><Link to='/create'>New Appointment</Link></li>
      <li><Link to='/'>Log Out</Link></li>
      <li><Link to='/' className='btn btn-floating pink lighten-1'>DN</Link></li>
    </ul>
  )
}

export default SignedInLinks;
