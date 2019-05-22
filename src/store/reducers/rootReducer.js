import authReducer from './authReducer';
import appointmentReducer from './appointmentReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  appointment: appointmentReducer,
  firestore: firestoreReducer
})

export default rootReducer;