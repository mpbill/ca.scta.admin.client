import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import loginForm from './loginFormReducer';
import currentUser from './currentUserReducer';
import meetingTypes from './meetingTypesReducer';
import newAddress from './newAddressReducer';
import allAddresses from './allAddressesReducer';

const rootReducer = combineReducers({
  loginForm,
  currentUser,
  meetingTypes,
  newAddress,
  allAddresses,
  routing: routerReducer,


});

export default rootReducer;
