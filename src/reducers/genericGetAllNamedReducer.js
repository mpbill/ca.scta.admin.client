/**
 * Created by mpbil on 4/19/2017.
 */

import * as types from '../constants/actionTypes';
let getDefaultState=()=>{
  return{};
};

function loadNamedReducerData(state,reducerName,reducerData) {
  let fetchedOn=new Date();
  let namedReducerState=state[reducerName];
  let newState;
  let namedReducer;
  if(namedReducerState){
    namedReducer = {...namedReducerState,isLoading:false,isLoaded:true,fetchedOn:fetchedOn,data:reducerData};
    newState={...state};
    newState[reducerName]=namedReducer;
  }
  else{
    newState={...state};
    newState[reducerName]={isLoading:false,isLoaded:true,fetchedOn:fetchedOn,data:reducerData};
  }

}


export default function genericGetAllDataReducer(state=getDefaultState(),action) {
  let newState,
      namedReducer;
  switch(action.type){
    case types.GENERIC_GET_ALL_DATA_RETURNED:
      return loadNamedReducerData(state,action.name,action.data);
    case types.GENERIC_GET_ALL_DATA_REQUEST:
      namedReducer={...state[action.name]};
      namedReducer.isLoading=true;
      newState={...state};
      newState[action.name]=namedReducer;
      return newState;
    default:
      return state;


  }
}
