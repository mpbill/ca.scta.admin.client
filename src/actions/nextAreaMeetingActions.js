import * as types from '../constants/actionTypes';
import api from '../services/apiService';
import moment from 'moment';
export function updateTextField(name, value) {
  return {
    type:types.NEXT_AREA_MEETING_UPDATE_TEXT_FIELD,
    name,
    value
  };
}

export function updateDate(date) {
  return {
    type:types.NEXT_AREA_MEETING_UPDATE_DATE,
    date
  };
}

export function updateTime(time){
  return {
    type:types.NEXT_AREA_MEETING_UPDATE_TIME,
    time
  };
}

export function getCurrentNextAreaMeeting(){
  return function (dispatch) {
    dispatch({type:types.NEXT_AREA_MEETING_REQUEST_CURRENT_AREA_MEETING});
    //api.get('currentAreaMeeting').then((data)=>dispatch({type:types.NEXT_AREA_MEETING_REQUEST_CURRENT_AREA_MEETING_RETURNED,payload:data}));
    setTimeout(dispatch({type:types.NEXT_AREA_MEETING_REQUEST_CURRENT_AREA_MEETING_RETURNED,payload:{
      dateTime:moment(),
      locationName:'Club 101',
      street:'blah',
      city:'blah',
      state:'blah',
      zip:'blah'
    }}),500);

  };
}
export function saveNewNextAreaMeeting(meeting){
  return function (dispatch) {
    dispatch({type:types.NEXT_AREA_MEETING_SAVE_NEW_NEXT_AREA_MEETING});
    setTimeout(()=>{
      dispatch({type:types.NEXT_AREA_MEETING_SAVE_NEW_NEXT_AREA_MEETING_RETURNED});
      dispatch(getCurrentNextAreaMeeting());
    });
  };
}
