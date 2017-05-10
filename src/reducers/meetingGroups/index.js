import newMeetingGroupForm from './newMeetingGroupReducer';
import meetingGroupsData from './meetingGroupsDataReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  newMeetingGroupForm,
  meetingGroupsData
});


