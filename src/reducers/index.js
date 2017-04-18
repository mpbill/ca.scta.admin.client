import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import loginForm from './loginFormReducer';
import currentUser from './currentUserReducer';
import meetingTypes from './meetingTypesReducer';
import newAddress from './newAddressReducer';
import allAddresses from './allAddressesReducer';
import newMeetingForm from './newMeetingReducer';
import newMeetingTimeForm from './newMeetingTimeReducer';
const rootReducer = combineReducers({
  loginForm,
  currentUser,
  meetingTypes,
  newAddress,
  allAddresses,
  newMeetingForm,
  newMeetingTimeForm,
  routing: routerReducer,


});

export default rootReducer;
