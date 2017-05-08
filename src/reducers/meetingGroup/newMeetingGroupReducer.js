
import * as types from '../../constants/actionTypes';

let getDefaultState=function () {
  return{
    isLoading:false,
    meetingGroup:{
      name:"",
      path:""
    }
  }
};

export default function newMeetingGroupReducer(state=getDefaultState(),action ) {

  switch(action.type){
    case types.NEW_MEETING_GROUP_UPDATE_NAME:
      return {...state,meetingGroup:{...state.meetingGroup,name:action.name}};
    case types.NEW_MEETING_GROUP_UPDATE_PATH:
      return {...state,meetingGroup:{...state.meetingGroup,path:action.path}};
    default:
      return state;
  }

}
