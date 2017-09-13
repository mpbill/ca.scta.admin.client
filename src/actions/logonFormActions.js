import * as types from '../constants/actionTypes';
import api from '../services/apiService';
import PRODUCTION from '../config';
export function updatePassword(password) {
  return {
    type:types.PASSWORD_UPDATE,
    password:password
  };
}
export function updateUsername(username){
  return {
    type:types.USERNAME_UPDATE,
    username:username
  };
}
export function login(username,password) {
  return function (dispatch) {
    dispatch({type:types.REQUEST_LOGIN});
    if(PRODUCTION) {
      api.post('login', {
        Password: password
      })
        .then(() => {
          dispatch({type: types.LOGIN_RETURNED, isLoggedIn: true});
        });
    }
    else{
      dispatch({type: types.LOGIN_RETURNED, isLoggedIn: true});
    }

  };
}
export function unauthorizedException() {
  return {
    type:types.UNAUTHORIZED_EXCEPTION
  };
}
export function getCurrentUser() {
  return function (dispatch) {
    dispatch({type:types.GET_CURRENT_USER});
    api.get('/users/current')
      .then((response)=>{
        if(response) {
          dispatch({type: types.GET_CURRENT_USER_RETURNED, user: response.data});
          dispatch({type: types.SET_LOGGED_IN});
        }
        else{
          dispatch({type:types.GET_CURRENT_USER_RETURNED,user:{}});
          dispatch({type:types.SET_LOGGED_OUT});
        }
      });
  };
}
