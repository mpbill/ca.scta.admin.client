import * as types from '../constants/actionTypes';

let getDefaultState=function () {
  return {
    id:"",
    name:"",
    meetingGroupId:"",
    address:{
      id:"",
      street1:"",
      street2:"",
      street3:"",
      city:"",
      state:"",
      zipCode:"",
      description:"",
      mapLink:""
    },

  }
};


export default function newMeetingReducer(state,action) {
  let newState;
  switch(action.type){

  }

  return newState;
}
