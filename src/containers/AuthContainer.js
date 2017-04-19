/**
 * Created by mpbil on 4/10/2017.
 */
import React, {Component} from 'react';
import * as actions from '../actions/logonFormActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginForm from '../components/LoginForm'



export const LoginPage=(props)=>{
  return (
    <LoginForm
      updateUsername={props.actions.updateUsername}
      updatePassword={props.actions.updatePassword}
      login={props.actions.login}
      loginForm={props.loginForm}
    />
  )
};
function mapStateToProps(state) {
  return {
    loginForm:state.loginForm
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(actions,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);


