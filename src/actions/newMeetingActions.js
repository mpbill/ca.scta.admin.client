import * as types from '../constants/actionTypes';
import {clearMeetingTime} from './newMeetingTimeActions';

export function addNewMeetingTimeToNewMeeting(meetingTime) {
  return function (dispatch) {
    dispatch({type:types.ADD_NEW_MEETING_TIME_TO_NEW_MEETING,meetingTime:meetingTime});
    dispatch(clearMeetingTime());
  };
}
export function removeMeetingTimeFromNewMeeting(index) {
  return {
    type:types.REMOVE_MEETING_TIME_FROM_NEW_MEETING_BY_INDEX,
    index:index
  };
}
export function setNewMeetingsAddress(address) {
  return{
    type:types.SET_NEW_MEETINGS_ADDRESS,
    address:address
  };
}
export function updateNewMeetingName(name) {
  return {
    type:types.UPDATE_NEW_MEETING_NAME,
    name:name
  };
}
export function setNewMeetingsGroupId(id) {
  return {
    type:types.SET_NEW_MEETINGS_GROUP_ID,
    payload:id
  };
}
