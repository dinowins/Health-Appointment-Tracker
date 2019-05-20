import React, { Component } from 'react'
import Notifications from './Notifications'
import AppointmentList from '../appointments/AppointmentList'

class Dashboard extends Component {
  render(){
    return (
      <div className="dashboard containter">
        <div className='row'>
          <div className='col s12 m6'>
            <AppointmentList/>
          </div>
          <div className='col s12 m5 offset-m1'>
            <Notifications/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
