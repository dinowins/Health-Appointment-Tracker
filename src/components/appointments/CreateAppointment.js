import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAppointment } from '../../store/actions/appointmentActions';
import { Redirect } from 'react-router-dom'

class CreateAppointment extends Component {
  state = {
    title: '',
    date: '',
    time: '',
    doctor: '',
    address: '',
    reasonForVisit: '',
    notes: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state)
    this.props.createAppointment(this.state)
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className='grey-text text-darken-3'>Create New Appointment</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={this.handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='date'>Appointment Date</label>
            <input type='text' id='date' onChange={this.handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='time'>Appointment Time</label>
            <input type='text' id='time' onChange={this.handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='doctor'>Doctor</label>
            <input type='text' id='doctor' onChange={this.handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='address'>Address</label>
            <input type='text' id='address' onChange={this.handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='text'>Reason for Visit</label>
            <input type='text' id='reasonForVisit' onChange={this.handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='notes'>Notes</label>
            <textarea id='notes' className='materialize-textarea' onChange={this.handleChange}></textarea>
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAppointment: (appointment) => dispatch(createAppointment(appointment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAppointment);
