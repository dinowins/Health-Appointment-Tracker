import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className='right'>
      <li><Link to='/create'>New Appointment</Link></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><Link to='/' className='btn btn-floating pink lighten-1'>DN</Link></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
