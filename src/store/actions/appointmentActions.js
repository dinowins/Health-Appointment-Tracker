export  const createAppointment = (appointment) => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: 'CREATE_APPOINTMENT', appointment });
  }
};