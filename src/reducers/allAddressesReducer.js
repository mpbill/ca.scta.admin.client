
import * as types from '../constants/actionTypes';


let getDefaultState=function () {
  return {
    isLoading:false,
    isLoaded:false,
    addresses:{}
  };
};

export default function allAddressesReducer(state=getDefaultState(),action) {
  let newState;
  switch(action.type){
    case types.ALL_ADDRESSES_REQUEST_ALL:
      newState={...state,isLoading:true,isLoaded:false};
      break;
    case types.ALL_ADDRESSES_REQUEST_ALL_RETURNED:
      newState={...state,isLoading:false,isLoaded:true,addresses:action.addresses};
      break;
    case types.ALL_ADDRESSES_REQUEST_DELETE:
      newState={...state,isLoading:true,isLoaded:false};
      break;
    case types.ALL_ADDRESSES_DELETE_RETURNED:
      newState={...state,isLoading:true,isLoaded:false};
      break;
    default:
      newState=state;
      break;
  }
  return newState;
}
