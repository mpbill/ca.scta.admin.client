
import React, {Component} from 'react';
class LoginForm extends Component{
  constructor(props){
    super(props);
    this.passwordChanged=this.passwordChanged.bind(this);
    this.usernameChanged=this.usernameChanged.bind(this);
    this.loginClicked=this.loginClicked.bind(this);
    this.passwordFieldKeyPress=this.passwordFieldKeyPress.bind(this);
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
  passwordFieldKeyPress(e){
    if(e.key=='Enter'){
      this.props.login(this.props.loginForm.username,this.props.loginForm.password)
    }
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
          <input className="input" type="password" value={this.props.loginForm.password} onInput={this.passwordChanged} onKeyPress={this.passwordFieldKeyPress} />
        </div>
        <div className="control">
          <button className="button is-primary" onClick={this.loginClicked}>Login</button>
        </div>
      </div>
    )
  }
}
export default LoginForm;
