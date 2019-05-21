import React from 'react'

const AppointmentDetails = (props) => {
  const id = props.match.params.id;
  console.log(props);
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>Lorem ipsum</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by Dino Nguyen</div>
          <div>May 21, 2019</div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentDetails
