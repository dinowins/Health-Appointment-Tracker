import React, { Component } from 'react'
import Notifications from './Notifications'
import AppointmentList from '../appointments/AppointmentList'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render(){
    //console.log(this.props)
    const { appointments } = this.props;
    return (
      <div className="dashboard containter">
        <div className='row'>
          <div className='col s12 m6'>
            <AppointmentList appointments={appointments}/>
          </div>
          <div className='col s12 m5 offset-m1'>
            <Notifications/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    appointments: state.appointment.appointments
  }
}

export default connect(mapStateToProps)(Dashboard);
