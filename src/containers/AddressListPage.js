import React, {Component} from 'react';
import * as actions from '../actions/allAddressesActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {Link} from 'react-router';
class AddressListTable extends Component{
  constructor(props){
    super(props);
    this.addressRowMapper=this.addressRowMapper.bind(this);
  }
  componentWillMount(){
    if(this.props.allAddresses.isLoading==false && this.props.allAddresses.isLoaded==false){
      this.props.getAllAddresses();
    }

  }
  addressRowMapper(key,index){
    let address = this.props.allAddresses.addresses[key];
    let click = function (id) {
      console.log(id);
      this.props.deleteAddress(id);
    };
    let boundClick=click.bind(this,key);
    return (
      <tr key={key}>
      <td>{index+1}</td>
      <td>{address.name}</td>
      <td>{address.street1}</td>
      <td>{address.city}</td>
      <td>
        <button
          className="button is-danger"
          onClick={boundClick}>
          <span className="fa fa-trash" />
        </button>
        <button className="button is-success"><span className="fa fa-pencil" /></button>
      </td>
    </tr>
    )
  }
  render(){
    let rows=[];
    if(this.props.allAddresses.isLoaded){
      rows = Object.keys(this.props.allAddresses.addresses).map(this.addressRowMapper);
  }
    rows.push(<tr key="addNewKey"><td /><td /><td /><td /><td><Link to="/addresses/new" className="button is-primary">New</Link></td></tr>)
    return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Street 1</th>
            <th>City</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

export const AddressListPage=(props)=>{
  return (
    <AddressListTable
      getAllAddresses={props.actions.getAllAddresses}
      deleteAddress={props.actions.deleteAddress}
      allAddresses={props.allAddresses}
      />

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
