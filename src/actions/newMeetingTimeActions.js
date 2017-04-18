import * as types from '../constants/actionTypes';
export function toggleMeridiem() {
  return {
    type:types.NEW_MEETING_TIME_TOGGLE_MERIDIEM
  }
}
export function cycleDay() {
  return {
    type:types.NEW_MEETING_TIME_CYCLE_DAY
  }
}
export function cycleHour() {
  return {
    type:types.NEW_MEETING_TIME_CYCLE_HOUR
  }
}
export function cycleMinute() {
  return {
    type:types.NEW_MEETING_TIME_CYCLE_MINUTE
  }
}
export function clearMeetingTime() {
  return function (dispatch) {
    dispatch({
      type:types.CLEAR_NEW_MEETING_TIME
    })
  };
}
export function addMeetingTypeToMeetingTime(meetingType) {
  return {
    type:types.ADD_MEETING_TYPE_TO_NEW_MEETING_TIME,
    meetingType:meetingType
  }
}
export function removeMeetingType(_id) {
  return {
    type:types.REMOVE_MEETING_TYPE_FROM_NEW_MEETING_TIME,
    _id:_id
  }
}
