import * as types from '../constants/actionTypes';
import moment from 'moment';
let getDefaultState=function () {
  return {
      isLoading:true,
      isValid:false,
      data:{
        dateTime:moment(),
        locationName:'',
        street:'',
        city:'',
        state:'TX',
        zip:''
      }

    };
};
const isValid = (d)=>
d.locationName
&& d.locationName.length<=100
&& d.dateTime
&& moment().isBefore(d.dateTime)
&& d.street
&& d.street.length<=100
&& d.city
&& d.city.length<=50
&& d.state
&& d.state.length===2
&& d.state.trim()
&& d.zip
&& d.zip.trim()
&& d.zip.length===5;
const setField = (state,name,value) => {
  let newState=state;
  const lengths = {
    locationName:100,
    street:100,
    city:50,
    state:2,
    zip:5,
  };
  if(!value || value.length<=lengths[name]){
    newState= {...state,data:{...state.data,[name]:value}}
  }
  let d = newState.data;
  let isValid = isValid(d);
  return {...newState,isValid:isValid};




};



export default function nextAreaMeetingReducer(state=getDefaultState(),action){
  let newState;
  switch(action.type){
    case types.NEXT_AREA_MEETING_UPDATE_TEXT_FIELD:
      newState = setField(state,action.name,action.value);
      break;
    case types.NEXT_AREA_MEETING_UPDATE_DATE:
      newState={...state,data:{...state.data,dateTime:action.date}};
      break;
    case types.NEXT_AREA_MEETING_UPDATE_TIME:
      newState={...state,data:{...state.data,dateTime:action.time}};
      break;
    case types.NEXT_AREA_MEETING_SAVE_NEW_NEXT_AREA_MEETING:
      newState={...state,isLoading:true};
      break;
    case types.NEXT_AREA_MEETING_REQUEST_CURRENT_AREA_MEETING:
      newState={...state,isLoading:true};
      break;
    case types.NEXT_AREA_MEETING_REQUEST_CURRENT_AREA_MEETING_RETURNED:
      if(action.payload){
        newState={...state,data:{...action.payload,dateTime:moment(action.payload),state:'TX'}};
        newState = {...newState,isValid:isValid(newState.data)}
      }
      else{
        newState = {...getDefaultState(),isLoading:false}
      }
      break;
    default:
      newState=state;
  }

  return newState;
}
