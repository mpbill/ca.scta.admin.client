import * as types from '../constants/actionTypes';
export function requestLoad(reducerName) {
  return {
    type:types.GENERIC_GET_ALL_DATA_REQUEST,
    name:reducerName
  }
}
export function loadReturned(name,data) {
  return {
    type:types.GENERIC_GET_ALL_DATA_RETURNED,
    name:name,
    data:data
  }
}


