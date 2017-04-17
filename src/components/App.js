import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import * as logonFormActions from '../actions/logonFormActions';
import * as currentUserActions from '../actions/currentUserActions';
import {bindActionCreators} from 'redux';
import LoginForm from '../containers/AuthContainer';

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
    let toRender=this.props.children;
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
