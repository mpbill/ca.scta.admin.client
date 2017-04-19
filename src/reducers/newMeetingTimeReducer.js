import * as types from '../constants/actionTypes';
import {dayOfWeek,meridiem} from '../constants/enums';
let getDefaultState=function () {
  return {
      dayOfWeek:dayOfWeek.sunday,
      hour:12,
      minute:0,
      meridiem:meridiem.ante,
      meetingTypes:{}
  }
};
let deduceNextMeridiem=function (mer) {
  switch(mer){
    case meridiem.post:
      return meridiem.ante;
    default:
      return meridiem.post;
  }
};
let deduceNextDay=function (d) {
  switch(d+1){
    case 7:
      return 0;
    default:
      return d+1;
  }
};
let deduceNextHour=function (h) {
  switch(h+1){
    case 13:
      return 1;
    default:
      return h+1;
  }
};
let deduceNextMinute=function (m) {
  switch(m+15){
    case 60:
      return 0;
    default:
      return m+15;
  }
};
export default function meetingsReducer(state=getDefaultState(),action) {
  let newState;
  switch(action.type){
    case types.NEW_MEETING_TIME_TOGGLE_MERIDIEM:
      newState={...state,meridiem:deduceNextMeridiem(state.meridiem)};
      break;
    case types.NEW_MEETING_TIME_CYCLE_DAY:
      newState={...state,dayOfWeek:deduceNextDay(state.dayOfWeek)};
      break;
    case types.NEW_MEETING_TIME_CYCLE_HOUR:
      newState={...state,hour:deduceNextHour(state.hour)};
      break;
    case types.NEW_MEETING_TIME_CYCLE_MINUTE:
      newState={...state,minute:deduceNextMinute(state.minute)};
      break;
    case types.CLEAR_NEW_MEETING_TIME:
      newState=getDefaultState();
      break;
    case types.ADD_MEETING_TYPE_TO_NEW_MEETING_TIME:
      let meetingTypes={...state.meetingTypes};
      meetingTypes[action.meetingType._id]=action.meetingType;
      newState={...state,meetingTypes};
      break;
    case types.REMOVE_MEETING_TYPE_FROM_NEW_MEETING_TIME:
      newState={...state};
      delete newState[action._id];
      break;
    default:
      newState=state;
  }
  return newState;
}

