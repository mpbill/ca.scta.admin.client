import React, {Component} from 'react';
import * as actions from '../actions/newAddressActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EditAddressForm from '../components/EditAddressForm';


export const EditAddressContainer=(props)=>{
  return (
    <EditAddressForm
      updateProp={props.actions.updateProp}
      requestInsert={props.actions.requestInsert}
      newAddress={props.newAddress}
    />
  )
};
function mapStateToProps(state) {
  return {
    newAddress:state.newAddress
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
)(EditAddressContainer);
