import React from 'react'
import AppointmentSummary from './AppointmentSummary'
import { Link } from 'react-router-dom'

const AppointmentList = ({appointments}) => {
  return (
    <div className="project-list section">
      { appointments && appointments.map(appointment => {
        return (
          <Link to={'/appointment/' + appointment.id}>
            <AppointmentSummary appointment={appointment} key={appointment.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default AppointmentList;
