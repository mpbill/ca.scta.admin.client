import React, {Component} from 'react';
import * as actions from '../actions/allAddressesActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {Link} from 'react-router';
class AddressListTable extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      </div>
    )
  }
}

export const AddressListPage=(props)=>{
  return (
    <AddressListPage
      getAllAddresses={props.getAllAddresses || props.actions.getAllAddresses}
      deleteAddress={props.deleteAddress || props.actions.deleteAddress} />

  )
};


function mapStateToProps(state) {
  return {
    allAddresses:state.allAddresses
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
)(AddressListPage)
