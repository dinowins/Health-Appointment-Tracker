import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
 
const AppointmentDetails = (props) => {
  const { appointment } = props;
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
    appointment: appointment
  }
}

export default compose(
  connect(mapStateToProps), 
  firestoreConnect([{
     collection: 'appointments' 
  }])
)(AppointmentDetails)
