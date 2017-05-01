/**
 * Created by mpbil on 4/11/2017.
 */
import * as types from "../constants/actionTypes";

let getInitialState=function () {
  return {
    isLoading:false,
    currentUser:{
      username:""
    }
  };
};

export default function currentUserReducer(state=getInitialState(),action) {
  let newState;
  switch (action.type){
    case types.GET_CURRENT_USER:
      newState={...state,isLoading:true};
      break;
    case types.GET_CURRENT_USER_RETURNED:
      newState={...state,currentUser:action.user,isLoading:false};
      break;
    default:
      newState=state;
  }
  return newState;
}
