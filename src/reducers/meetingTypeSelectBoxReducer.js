import * as types from '../constants/actionTypes';


let getDefaultState=function () {
  return {
    isPopulated:false,
    isFresh:true,
    meetingTypes:{},
    alreadySelected:{},

  };
};

export default function meetingTypeSelectBoxReducer(state=getDefaultState(),action) {
  let newState,
      meetingTypes,
      alreadySelected;
  switch(action.type){
    case types.POPULATE_SELECT_BOX:
      if(state.isFresh)
        newState={...state,isPopulated:true,isFresh:true,meetingTypes:action.meetingTypes,alreadySelected:{}};
      else
        newState=state;
      break;
    case types.CHANGE_SELECTED:
      meetingTypes={...state.meetingTypes};
      alreadySelected={...state.alreadySelected};
      alreadySelected[action.selectedId]=meetingTypes[action.selectedId];
      delete meetingTypes[action.selectedId];
      newState={...state,isFresh:false,meetingTypes,alreadySelected};
      break;
    case types.UNSET_ITEM:
      meetingTypes={...state.meetingTypes};
      alreadySelected={...state.alreadySelected};
      meetingTypes[action.key]=alreadySelected[action.key];
      delete alreadySelected[action.selectedId];
      newState={...state,isFresh:false,meetingTypes,alreadySelected};
      break;
    case types.MEETING_TYPE_SELECT_BOX_SET_IS_FRESH:
      meetingTypes={...state.meetingTypes,...state.alreadySelected};
      alreadySelected={};
      newState={...state,isFresh:true,alreadySelected:alreadySelected,meetingTypes:meetingTypes};
      break;
    default:
      newState=state;
  }
  return newState;
}
