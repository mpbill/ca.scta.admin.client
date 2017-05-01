import React from 'react';
import * as actions from '../actions/newAddressActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EditAddressForm from '../components/EditAddressForm';
import PropTypes from 'prop-types';

export const EditAddressContainerFunc=(props)=>{
  return (
    <EditAddressForm
      updateProp={props.actions.updateProp}
      requestInsert={props.actions.requestInsert}
      newAddress={props.newAddress}
    />
  );
};
EditAddressContainerFunc.propTypes={
  updateProp:PropTypes.func,
  requestInsert:PropTypes.func,
  newAddress:PropTypes.object,
  actions:PropTypes.object
};
function mapStateToProps(state) {
  return {
    newAddress:state.newAddress
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(actions,dispatch)
  };
}

let EditAddressContainer =connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAddressContainerFunc);

  export default EditAddressContainer;
