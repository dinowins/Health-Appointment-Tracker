export  const createAppointment = (appointment) => {
  return (dispatch, getState, getFirebase, getFirestore) => {
    //make async call to database
    dispatch({ type: 'CREATE_APPOINTMENT', appointment });
  }
};