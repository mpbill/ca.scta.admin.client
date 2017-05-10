import * as types from '../../constants/actionTypes';

let getDefaultState=function () {
  return {
    isLoading:false,
    isValid:false,
    hasUserTouchedPath:false,
    meetingGroup:{
      name:"",
      path:""
    }
  };
};

export default function (state=getDefaultState(),action) {
  switch(action.type){
    case types.NEW_MEETING_GROUP_RESET:
      return getDefaultState();
    case types.NEW_MEETING_GROUP_UPDATE_NAME:
      if(state.hasUserTouchedPath) {
        return {
          ...state,
          isValid: (action.name && state.meetingGroup.path),
          meetingGroup: {...state.meetingGroup, name: action.name}
        };
      }
      let splitNames = action.name.split(" ");
      let firstWord=splitNames[0].toLowerCase();
      splitNames.shift();
      let fullPath=firstWord + splitNames.join("");
      return {...state,isValid:(action.name && state.meetingGroup.path),meetingGroup:{...state.meetingGroup,name:action.name,path:fullPath}};

    case types.NEW_MEETING_GROUP_UPDATE_PATH:
      if(action.path.includes(" ")){
        return state;
      }
      let updatedPathValue=false;
      if(action.path){
        updatedPathValue=true;
      }
      return {...state,isValid:(state.meetingGroup.name && action.path),meetingGroup:{...state.meetingGroup,path:action.path},hasUserTouchedPath:updatedPathValue};

    default:
      return state;
  }
}
