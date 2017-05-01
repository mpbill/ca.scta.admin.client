import * as types from '../constants/actionTypes';

let getDefaultState=function () {
  return {
    isSaving:false,
    isSaved:false,
    newMeeting:{
      _id:"",
      name:"",
      meetingGroupId:"",
      address:{},
      meetingTimes:[],
    }
  };
};


export default function newMeetingReducer(state=getDefaultState(),action) {
  let newState;
  let newMeeting;
  let meetingTimes;
  switch(action.type){
    case types.ADD_NEW_MEETING_TIME_TO_NEW_MEETING:
      meetingTimes=[...state.newMeeting.meetingTimes,action.meetingTime];
      newMeeting={...state.newMeeting,meetingTimes};
      newState={...state,newMeeting};
      break;
    case types.REMOVE_MEETING_TIME_FROM_NEW_MEETING_BY_INDEX:
      meetingTimes=[
        ...state.newMeeting.meetingTimes.slice(0,action.index),
        ...state.newMeeting.meetingTimes.slice(action.index+1)
      ];
      newMeeting={...state.newMeeting,meetingTimes};
      newState={...state,newMeeting};
      break;
    case types.SET_NEW_MEETINGS_ADDRESS:
      newMeeting={...state.newMeeting,address:action.address};
      newState={...state,newMeeting};
      break;
    case types.UPDATE_NEW_MEETING_NAME:
      newMeeting={...state.newMeeting,name:action.name};
      newState={...state,newMeeting};
      break;
    default:
      newState=state;
  }

  return newState;
}
