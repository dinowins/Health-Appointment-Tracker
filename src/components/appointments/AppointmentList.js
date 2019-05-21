import React from 'react'
import AppointmentSummary from './AppointmentSummary'

const AppointmentList = () => {
  return (
    <div className="project-list section">
      <AppointmentSummary />
      <AppointmentSummary />
      <AppointmentSummary />
      <AppointmentSummary />
    </div>
  )
}

export default AppointmentList;
