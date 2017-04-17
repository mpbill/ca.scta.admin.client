
import api from '../services/apiService';
import * as types from '../constants/actionTypes';

let getAllAddressesReturned=function(data){
  return {
    type:types.ALL_ADDRESSES_REQUEST_ALL_RETURNED,
    addresses:data
  }
};



export function getAllAddresses() {
  return function (dispatch) {
    dispatch({type:types.ALL_ADDRESSES_REQUEST_ALL});
    api.get("genericApi/addresses")
    .then(({data})=>dispatch(getAllAddressesReturned(data)))
  }
}
export function deleteAddress(id) {
  return function (dispatch) {
    dispatch({type:types.ALL_ADDRESSES_REQUEST_DELETE});
    api.delete("genericApi/addresses/"+id)
    .then(({data})=>{
      dispatch({type:types.ALL_ADDRESSES_DELETE_RETURNED});
      dispatch(getAllAddresses());
    });
  }
}
