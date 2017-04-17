import api from '../services/apiService';
import * as types from '../constants/actionTypes';


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
      dispatch({type:types.ADDRESS_DATA_INSERT_NEW,_id:data._id,address:address});
      dispatch({type:types.NEW_ADDRESS_CLEAR});
    })
  };
}


