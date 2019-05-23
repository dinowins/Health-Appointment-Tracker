import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  console.log(props);
  return (
    <ul className='right'>
      <li><Link to='/create'>New Appointment</Link></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><Link to='/' className='btn blue accent-4 lighten-1'>
        {props.profile.initials}
      </Link></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
