export  const createAppointment = (appointment) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore.collection('appointments').add({
      ...appointment,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_APPOINTMENT', appointment });
    }).catch((err) => {
      dispatch({ type: 'CREATE_APPOINTMENT_ERROR', err });
    })
  }
};

// title: 'Podiatrist appointment',
// date: '8/24/2019',
// time: '12:30 PM',
// doctor: 'Suyash Matoli',
// address: '2345 Jane Street',
// reasonForVisit: 'Check foot pain',
// notes: 'N/A'