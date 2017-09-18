/**
 * Created by mpbil on 4/10/2017.
 */
import React from 'react';
import * as actions from '../actions/logonFormActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginForm from '../components/LoginForm';
import PropTypes from 'prop-types';


    this.passwordKeyPress = this.passwordKeyPress.bind(this);
  passwordKeyPress(e){
    if(e.key==="Enter"){
      this.loginClicked();
    }
  }
          <input disabled={true} className="input" type="text" id={'username'} value={this.props.loginForm.username} onInput={this.usernameChanged} />
          <input className="input" type="password" value={this.props.loginForm.password} onInput={this.passwordChanged} onKeyPress={this.passwordKeyPress} />
export const LoginPage=(props)=>{
  return (
    <LoginForm
      updateUsername={props.actions.updateUsername}
      updatePassword={props.actions.updatePassword}
      login={props.actions.login}
      loginForm={props.loginForm}
    />
  );
};
LoginPage.propTypes={
  actions:PropTypes.object,
  loginForm:PropTypes.object
};
function mapStateToProps(state) {
  return {
    loginForm:state.loginForm
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(actions,dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);


