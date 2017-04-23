import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import loginForm from './loginFormReducer';
import currentUser from './currentUserReducer';
import meetingTypes from './meetingTypesReducer';
import newAddress from './newAddressReducer';
import allAddresses from './allAddressesReducer';
import newMeetingForm from './newMeetingReducer';
import newMeetingTimeForm from './newMeetingTimeReducer';
import meetingTypeSelectBox from './meetingTypeSelectBoxReducer';
import genericGetAllData from './genericGetAllNamedReducer';
const rootReducer = combineReducers({
  loginForm,
  currentUser,
  meetingTypes,
  newAddress,
  allAddresses,
  newMeetingForm,
  newMeetingTimeForm,
  meetingTypeSelectBox,
  routing: routerReducer,


});

export default rootReducer;
