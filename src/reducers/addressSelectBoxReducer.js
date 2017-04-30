import * as types from '../constants/actionTypes';

let getDefaultState=function () {
  return {

  }
};
let getDefaultAddressState=function () {
  return {
    selected:{},
    isValid:false
  }
};

export default function addressSelectBoxReducer(state=getDefaultState(),action) {
  let newState,specificState;
  switch(action.type){
    case types.ADDRESS_SELECT_BOX_CHANGE_SELECTION:
      newState={...state};
      specificState=newState[action.name];
      if(specificState){
        specificState={}
      }
      else{

      }
      newState[action.name].address=action.address;

  }
}
