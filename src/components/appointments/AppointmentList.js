import React from 'react'
import AppointmentSummary from './AppointmentSummary'

const AppointmentList = ({appointments}) => {
  return (
    <div className="project-list section">
      { appointments && appointments.map(appointment => {
        return (
          <AppointmentSummary appointment={appointment} key={appointment.id} />
        )
      })}
    </div>
  )
}

export default AppointmentList;
