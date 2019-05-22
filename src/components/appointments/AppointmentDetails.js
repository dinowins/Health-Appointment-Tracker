import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
 
const AppointmentDetails = (props) => {
  const { appointment, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />

  if (appointment) {
    return (
      <div className='container section appointment-details'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <span className='card-title'>{ appointment.title }</span>
            <p>{ appointment.content }</p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
            <div>{ appointment.doctor }</div>
            <div>{ appointment.date }</div>
            <div>{ appointment.time }</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
     <div className='container center'>
      <p>Loading appointment... </p>
     </div> 
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state)
  const id = ownProps.match.params.id
  const appointments = state.firestore.data.appointments
  const appointment = appointments ? appointments[id] : null
  return {
    appointment: appointment,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps), 
  firestoreConnect([{
     collection: 'appointments' 
  }])
)(AppointmentDetails)
