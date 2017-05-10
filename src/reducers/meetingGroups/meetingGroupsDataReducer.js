import * as types from '../../constants/actionTypes';

let getDefaultState=()=>{
  return {
    isLoading:true,
    meetingGroups:{}
  }
};

export default function meetingGroupsData(state=getDefaultState(),action) {
  switch(action.type){
    case types.MEETING_GROUPS_DATA_LOADING:
    case types.MEETING_GROUPS_DATA_GET_ALL:
      return {...state,isLoading:true};
    case types.MEETING_GROUPS_DATA_GET_ALL_RETURNED:
      return {...state,isLoading:false,meetingGroups:action.payload};
    default:
      return state;
  }
}
