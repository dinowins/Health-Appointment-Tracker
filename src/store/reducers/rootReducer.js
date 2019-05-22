import authReducer from './authReducer';
import appointmentReducer from './appointmentReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  appointment: appointmentReducer
})

export default rootReducer;