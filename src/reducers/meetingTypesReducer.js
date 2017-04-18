
import * as types from '../constants/actionTypes';
let getDefaultState=function () {
  return {
    isLoading:false,
    isLoaded:false,
    meetingTypes:{},
    selectBox:{
      isPopulated:false,
      isFresh:false,
      selectedId:"",
      meetingTypes:{},
      alreadySelected:{},
    }
  }
};

export default function meetingTypeReducer(state=getDefaultState(), action) {
  let newState,
    meetingTypes,
    alreadySelected,
    selectBox;
  switch(action.type){
    case types.GET_MEETING_TYPES:
      newState={...state,isLoading:true};
      break;
    case types.GET_MEETING_TYPES_RETURNED:
      newState={...state,isLoading:false,isLoaded:true,meetingTypes:action.meetingTypes};
      break;
    case types.POPULATE_SELECT_BOX:
      selectBox={...state.selectBox,isPopulated:true,isFresh:true,meetingTypes:state.meetingTypes,alreadySelected:{}};
      newState={...state,selectBox};
      break;
    case types.CHANGE_SELECTED:
      meetingTypes={...state.selectBox.meetingTypes};
      alreadySelected={...state.selectBox.alreadySelected};
      alreadySelected[action.selectedId];
    default:
      newState=state;
  }
  return newState;
}
