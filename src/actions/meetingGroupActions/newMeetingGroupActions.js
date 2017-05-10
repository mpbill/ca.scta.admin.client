import * as types from '../../constants/actionTypes';
import api from '../../services/apiService';
import {push} from 'react-router-redux';
export function updateName(name) {
  return {
    type:types.NEW_MEETING_GROUP_UPDATE_NAME,
    name:name
  };
}

export function updatePath(path) {
  return {
    type:types.NEW_MEETING_GROUP_UPDATE_PATH,
    path:path
  };
}

export function saveNewMeetingGroup(meetingGroup) {
  return function (dispatch) {
    dispatch({type:types.NEW_MEETING_GROUP_SAVE});
    api.post('genericApi/meetingGroups',meetingGroup)
    .then(()=>{
      dispatch({type:types.NEW_MEETING_GROUP_RESET});
      dispatch({type:types.MEETING_GROUPS_DATA_GET_ALL});
      dispatch(push("/meetingGroups"));


    })
    .catch(console.log);
  };
}


