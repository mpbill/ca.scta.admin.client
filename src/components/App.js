import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import * as logonFormActions from '../actions/logonFormActions';
import * as currentUserActions from '../actions/currentUserActions';
import {bindActionCreators} from 'redux';
import LoginForm from '../containers/AuthContainer';

import {connect} from 'react-redux';

class TopNavBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <nav className="nav">
        <div className="nav-left">
          <Link to="/addresses" className="nav-item is-tab" activeClassName="is-active">Addresses</Link>
          <Link to="/meetings" className="nav-item is-tab" activeClassName="is-active">Meetings</Link>
          <Link to="/next-area-meeting" className="nav-item is-tab" activeClassName="is-active">Next Area Meeting </Link>
        </div>
      </nav>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);


  }
  componentDidMount(){
    if(!this.props.loginForm.isLoading)
      this.props.getCurrentUser();
  }
  render() {
    let toRender=<div><TopNavBar/>{this.props.children}</div>
    if(!this.props.loginForm.isLoggedIn){
      toRender=<LoginForm/>;
    }
    return (
      <div>
        {toRender}
      </div>
    );
  }
}
const AppContainer=(props)=>{
  return(
    <App
      getCurrentUser={props.logonFormActions.getCurrentUser}
      loginForm={props.loginForm}
      children={props.children}>
    </App>
  )
};

function mapStateToProps(state) {
  return {
    loginForm:state.loginForm,
    currentUser:state.currentUser
  }
}
function mapDispatchToProps(dispatch) {
  return {
    logonFormActions:bindActionCreators(logonFormActions,dispatch),
    currentUserActions:bindActionCreators(currentUserActions,dispatch)
  }
}
App.propTypes = {
  children: PropTypes.element
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
