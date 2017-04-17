/**
 * Created by mpbil on 4/11/2017.
 */
import * as types from '../constants/actionTypes';
import api from '../services/apiService';

export function getCurrentUser() {
  return function (dispatch) {
    dispatch({type:types.GET_CURRENT_USER});
    api.get('/user')
    .then(({data})=>dispatch({type:types.GET_CURRENT_USER_RETURNED,user:data}))
    .catch(err=>{
      dispatch({type:types.GET_CURRENT_USER_RETURNED,user:{}});
      dispatch({type:types.UNAUTHORIZED_EXCEPTION});
    })
  }
}
