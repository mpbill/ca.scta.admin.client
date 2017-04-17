
import * as types from '../constants/actionTypes';
let getDefaultState=function () {
  return {
    isLoading:false,
    meetingTypes:{}
  }
};

export default function meetingTypeReducer(state=getDefaultState(), action) {
  let newState;
  switch(action.type){
    case types.GET_MEETING_TYPES:
      newState={...state,isLoading:true};
      break;
    case types.GET_MEETING_TYPES_RETURNED:
      newState={...state,isLoading:false,meetingTypes:action.meetingTypes};
      break;
    default:
      newState=state;
  }
  return newState;
}
