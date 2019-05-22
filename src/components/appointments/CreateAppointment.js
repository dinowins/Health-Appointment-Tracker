import React, { Component } from 'react'

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
    console.log(this.state)
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className='grey-text text-darken-3'>Create New Appointment</h5>
          <div className='input-field'>
            <label htmlFor='Title'>Title</label>
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

export default CreateAppointment;
