import * as types from '../../constants/actionTypes';
import api from '../../services/apiService';

export function getAllMeetingGroups() {
  return function (dispatch) {
    dispatch({type:types.MEETING_GROUPS_DATA_GET_ALL});
    api
    .get('genericApi/meetingGroups')
    .then(({data})=>dispatch({type:types.MEETING_GROUPS_DATA_GET_ALL_RETURNED,payload:data}));

  };
}
export function toggleLoading() {
  return {
    type:types.MEETING_GROUPS_DATA_TOGGLE_LOADING
  }
}

export function deleteMeetingGroup(id) {
  return function (dispatch) {
    dispatch({type:types.MEETING_GROUPS_DATA_LOADING});
    api.delete('genericApi/meetingGroups/'+id).then(({data})=>dispatch(getAllMeetingGroups()));
  };
}
