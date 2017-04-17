import * as types from 'types';
import api from 'api';
export function getMeetingTypes() {
  return function (dispatch) {
    dispatch({type:types.GET_MEETING_TYPES});
    api.get('/meetingTypes')
    .then(({data})=>dispatch({type:types.GET_MEETING_TYPES_RETURNED,meetingTypes:data}));
  }
}
