import React from 'react';
import PropTypes from 'prop-types';

import * as logonFormActions from '../actions/logonFormActions';
import * as currentUserActions from '../actions/currentUserActions';
import {bindActionCreators} from 'redux';
import LoginForm from '../containers/AuthContainer';
import TopNavBar from './TopNavBar';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props){
    super(props);


  }
  componentDidMount(){
    if(!this.props.loginForm.isLoading)
      this.props.getCurrentUser();
  }
  render() {
    let toRender=<div className="container"><TopNavBar/>{this.props.children}</div>;
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
      children={props.children} />
  );
};

function mapStateToProps(state) {
  return {
    loginForm:state.loginForm,
    currentUser:state.currentUser
  };
}
function mapDispatchToProps(dispatch) {
  return {
    logonFormActions:bindActionCreators(logonFormActions,dispatch),
    currentUserActions:bindActionCreators(currentUserActions,dispatch)
  };
}
App.propTypes = {
  children: PropTypes.element
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
