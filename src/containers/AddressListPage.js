import React from 'react';
import * as actions from '../actions/allAddressesActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import AddressListTable from '../components/AddressListTable';


export const AddressListPageFunc=(props)=>{
  return (
    <AddressListTable
      getAllAddresses={props.actions.getAllAddresses}
      deleteAddress={props.actions.deleteAddress}
      allAddresses={props.allAddresses}
      />

  );
};
AddressListPageFunc.propTypes={
  getAllAddresses:PropTypes.func,
  deleteAddress:PropTypes.func,
  allAddresses:PropTypes.object,
  actions:PropTypes.object
};



function mapStateToProps(state) {
  return {
    allAddresses:state.allAddresses
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
)(AddressListPageFunc);
