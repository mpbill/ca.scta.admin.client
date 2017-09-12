import * as types from '../constants/actionTypes';
import moment from 'moment';
let getDefaultState=function () {
  return {
    newNextAreaMeeting:{
      isSaving:false,
      isSaved:false,
      data:{
        dateTime:moment().hour(12).minute(0),
        locationName:'',
        street:'',
        city:'',
        state:'',
        zip:''
      }
    }
    };
};


export default function nextAreaMeetingReducer(state=getDefaultState(),action) {
  let newState;
  switch(action.type){
    case types.NEXT_AREA_MEETING_UPDATE_TEXT_FIELD:
      newState={...state,newNextAreaMeeting:{...state.newNextAreaMeeting,data:{...state.newNextAreaMeeting.data,[action.name]:action.value}}};
      break;
    case types.NEXT_AREA_MEETING_UPDATE_DATE:
      newState={...state,newNextAreaMeeting:{...state.newNextAreaMeeting,data:{...state.newNextAreaMeeting.data,dateTime:action.date}}};
      break;
    case types.NEXT_AREA_MEETING_UPDATE_TIME:
      newState={...state,newNextAreaMeeting:{...state.newNextAreaMeeting,data:{...state.newNextAreaMeeting.data,dateTime:action.time}}};
      break;
    default:
      newState=state;
  }

  return newState;
}
