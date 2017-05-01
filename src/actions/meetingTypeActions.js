import * as types from '../constants/actionTypes';
import api from '../services/apiService';
import {populateSelectBox} from './meetingTypeSelectBoxActions';
export function getMeetingTypes() {
  return function (dispatch) {
    dispatch({type:types.GET_MEETING_TYPES});
    api.get('/meetingTypes')
    .then(({data})=>{
      dispatch({type:types.GET_MEETING_TYPES_RETURNED,meetingTypes:data});
      dispatch(populateSelectBox(data));
    });
  };
}
