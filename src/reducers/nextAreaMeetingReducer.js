import * as types from '../constants/actionTypes';
import moment from 'moment';
let getDefaultState=function () {
  return {
      isLoading:true,
      data:{
        dateTime:moment(),
        locationName:'',
        street:'',
        city:'',
        state:'',
        zip:''
      }

    };
};


export default function nextAreaMeetingReducer(state=getDefaultState(),action) {
  let newState;
  switch(action.type){
    case types.NEXT_AREA_MEETING_UPDATE_TEXT_FIELD:
      newState={...state,data:{...state.newNextAreaMeeting.data,[action.name]:action.value}};
      break;
    case types.NEXT_AREA_MEETING_UPDATE_DATE:
      newState={...state,data:{...state.newNextAreaMeeting.data,dateTime:action.date}};
      break;
    case types.NEXT_AREA_MEETING_UPDATE_TIME:
      newState={...state,data:{...state.newNextAreaMeeting.data,dateTime:action.time}};
      break;
    case types.NEXT_AREA_MEETING_SAVE_NEW_NEXT_AREA_MEETING:
      newState={...state,isLoading:true};
      break;
    case types.NEXT_AREA_MEETING_REQUEST_CURRENT_AREA_MEETING:
      newState={...state,isLoading:true};
      break;
    case types.NEXT_AREA_MEETING_REQUEST_CURRENT_AREA_MEETING_RETURNED:
      if(action.payload){
        newState={...state,data:action.payload};
      }
      else{
        newState = {...getDefaultState(),isLoading:false}
      }
      break;
    default:
      newState=state;
  }

  return newState;
}
