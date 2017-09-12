import * as types from '../constants/actionTypes';
import moment from 'moment';
let getDefaultState=function () {
  return {
    newNextAreaMeeting:{
      isSaving:false,
      isSaved:false,
      data:{
        dateTime: moment().add(3,'M'),
        locationName:'',
        street:'',
        city:'',
        state:'',
        zip:''
      }
    },
    currentNextAreaMeeting:{
      isLoading:true,
      isLoaded:false,
      data:{}
    }
    }
};


export default function nextAreaMeetingReducer(state=getDefaultState(),action) {
  let newState;
  switch(action.type){
    default:
      newState=state;
  }

  return newState;
}
