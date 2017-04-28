import api from '../services/apiService';
import * as types from '../constants/actionTypes';
import * as allAddressActions from './allAddressesActions';
import {browserHistory} from 'react-router'
import {push} from 'react-router-redux';
export function updateProp(propName,propValue) {
  return {
    type:types.NEW_ADDRESS_PROP_UPDATE,
    propName:propName,
    propValue:propValue
  }
}
export function requestInsert(address) {
  return function (dispatch) {
    dispatch({type:types.NEW_ADDRESS_REQUEST_INSERT});
    api.post("/genericApi/addresses",address)
    .then(({data})=>{
      dispatch({type:types.NEW_ADDRESS_REQUEST_INSERT_RETURNED});
      dispatch(allAddressActions.getAllAddresses());
      dispatch(push('/addresses'));
      dispatch({type:types.NEW_ADDRESS_CLEAR});
    })
  };
}


