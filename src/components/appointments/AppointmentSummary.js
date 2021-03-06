import React from 'react'
import moment from 'moment'

const AppointmentSummary = ({appointment}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className='card-title'>{appointment.title}</span>
        <p className='grey-text'>{moment(appointment.date).format('MMM Do YYYY')}</p>
        <p className='grey-text'>{appointment.time}</p>
        <p className='grey-text'>{appointment.address}</p>
      </div>
    </div>
  )
}

export default AppointmentSummary
