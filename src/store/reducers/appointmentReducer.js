const initState = {
  appointments: [
    {id: '1', title: 'New arm cast', date: '6/1/2019', time: '9:00 AM', doctor: 'Maria Gonzalo', address: '564 Terror Street', reasonForVisit: 'Broke arm playing basketball', notes: 'N/A'},
    {id: '2', title: 'Tetanus shot', date: '6/23/2019', time: '11:00 AM', doctor: 'Yash Mehta', address: '3201 Tuscany Road', reasonForVisit: 'Need new vaccine', notes: 'N/A'},
    {id: '3', title: 'Dental Cleaning', date: '7/13/2019', time: '8:00 AM', doctor: 'Hanna Assefa', address: '9338 MCG Drive', reasonForVisit: 'Cavities?', notes: 'N/A'}
  ]
}

const appointmentReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_APPOINTMENT":
      console.log('created appointment', action.appointment)
  }
  return state;
}

export default appointmentReducer; 