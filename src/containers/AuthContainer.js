/**
 * Created by mpbil on 4/10/2017.
 */
import React, {Component} from 'react';
import * as actions from '../actions/logonFormActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class LoginForm extends Component{
  constructor(props){
    super(props);
    this.passwordChanged=this.passwordChanged.bind(this);
    this.usernameChanged=this.usernameChanged.bind(this);
    this.loginClicked=this.loginClicked.bind(this);
  }
  usernameChanged(e){
    this.props.updateUsername(e.target.value);
  }
  passwordChanged(e){
    this.props.updatePassword(e.target.value);
  }
  loginClicked(){
    this.props.login(this.props.loginForm.username,this.props.loginForm.password)
  }
  render(){
    return (
      <div className="column is-4 is-offset-4">
        <label className="label">Username</label>
        <div className="control">
          <input className="input" type="text" id={'username'} value={this.props.loginForm.username} onInput={this.usernameChanged} />
        </div>
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" value={this.props.loginForm.password} onInput={this.passwordChanged} />
        </div>
        <div className="control">
          <button className="button is-primary" onClick={this.loginClicked}>Login</button>
        </div>
      </div>
    )
  }
}

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


