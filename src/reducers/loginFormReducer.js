import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
let getDefaultState=()=>{
      return {
          isLoggedIn: false,
          isLoading:false,
          username:"admin",
          password:"",
          currentUser:{}
      };
};

export default function loginFormReducer(state=getDefaultState(), action) {
  let newState;
  switch (action.type){
    case types.PASSWORD_UPDATE:
      newState=objectAssign({},state);
      newState.password=action.password;
      return newState;
    case types.USERNAME_UPDATE:
      newState=objectAssign({},state);
      newState.username=action.username;
      return newState;
    case types.REQUEST_LOGIN:
      newState=objectAssign({},{isLoading:true,isLoggedIn:false},state);
      return newState;
    case types.LOGIN_RETURNED:
      newState=objectAssign({},state,{isLoading:false,isLoggedIn:action.isLoggedIn,password:""});
      return newState;
    case types.UNAUTHORIZED_EXCEPTION:
      newState={...state,isLoading:false,isLoggedIn:false};
      return newState;
    case types.GET_CURRENT_USER:
      newState={...state,isLoading:true};
      return newState;
    case types.GET_CURRENT_USER_RETURNED:
      newState={...state,currentUser:action.currentUser,isLoading:false};
      return newState;
    case types.SET_LOGGED_OUT:
      newState={...state,isLoggedIn:false};
      return newState;
    case types.SET_LOGGED_IN:
      return {...state,isLoggedIn:true};
    default:
      return state;

  }
}
