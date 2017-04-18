import * as types from '../constants/actionTypes';


let getDefaultState=function () {
  return {
    isPopulated:false,
    isFresh:false,
    selectedId:"",
    meetingTypes:{},
    alreadySelected:{},

  }
};

export default function meetingTypeSelectBoxReducer(state=getDefaultState(),action) {
  let newState,
      meetingTypes,
      alreadySelected;
  switch(action.type){
    case types.POPULATE_SELECT_BOX:
      newState={...state,isPopulated:true,isFresh:true,meetingTypes:action.meetingTypes,alreadySelected:{}};
      break;
    case types.CHANGE_SELECTED:
      meetingTypes={...state.meetingTypes};
      alreadySelected={...state.alreadySelected};
      alreadySelected[action.selectedId]=meetingTypes[action.selectedId];
      delete meetingTypes[action.selectedId];
      newState={...state,isFresh:false,selectedId:action.selectedId,meetingTypes};
      break;
    default:
      newState=state;
  }
  return newState;
};
