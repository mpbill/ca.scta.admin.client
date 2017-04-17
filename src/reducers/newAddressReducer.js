import * as types from '../constants/actionTypes';

let getDefaultState=function () {
  return {
    isLoading:false,
    address:{
      street1:"",
      street2:"",
      street3:"",
      city:"",
      state:"",
      zipCode:"",
      description:"",
      mapLink:""
    },
  }
};

export default function newAddressReducer(state=getDefaultState(),action) {
  let newState;
  let address;
  let oldAddress = state.address;
  switch(action.type){
    case types.NEW_ADDRESS_PROP_UPDATE:
      address={...oldAddress};
      address[action.propName]=action.propValue;
      newState={...state,address};
      break;
    case types.NEW_ADDRESS_CLEAR:
      newState=getDefaultState();
      break;
    case types.NEW_ADDRESS_REQUEST_INSERT:
      newState={...state,isLoading:true};
      break;
    case types.NEW_ADDRESS_REQUEST_INSERT_RETURNED:
      newState={...state,isLoading:false};
      break;
    default:
      newState=state;
      break;
  }
  return newState;
}
