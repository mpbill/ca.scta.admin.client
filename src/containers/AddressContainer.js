import React, {Component} from 'react';
import * as actions from '../actions/newAddressActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class TextInputComponent extends Component{
  constructor(props){
    super(props);
    this.inputChanged=this.inputChanged.bind(this);
  }
  inputChanged(e){
    this.props.updateProp(e.target.id,e.target.value);
  }
  render(){
    return (
      <div>
        <label className="label">{this.props.children}</label>
        <div className="control">
          <input className="input" type="text" id={this.props.id} value={this.props.value} onInput={this.inputChanged} />
        </div>
      </div>
    )
  }
}

class EditAddressForm extends Component{
  constructor(props){
    super(props);
    this.saveClicked=this.saveClicked.bind(this);
  }
  saveClicked(){
    this.props.requestInsert(this.props.newAddress.address);
  }
  render(){
    return (
      <div className="column is-12">
        <TextInputComponent
          id="street1"
          value={this.props.newAddress.address.street1}
          updateProp={this.props.updateProp}>Street 1</TextInputComponent>
        <TextInputComponent
          id="street2"
          value={this.props.newAddress.address.street2}
          updateProp={this.props.updateProp}>Street 2</TextInputComponent>
        <TextInputComponent
          id="street3"
          value={this.props.newAddress.address.street3}
          updateProp={this.props.updateProp}>Street 3</TextInputComponent>
        <TextInputComponent
          id="city"
          value={this.props.newAddress.address.city}
          updateProp={this.props.updateProp}>City</TextInputComponent>
        <TextInputComponent
          id="state"
          value={this.props.newAddress.address.state}
          updateProp={this.props.updateProp}>State</TextInputComponent>
        <TextInputComponent
          id="zipCode"
          value={this.props.newAddress.address.zipCode}
          updateProp={this.props.updateProp}>Zip Code</TextInputComponent>
        <TextInputComponent
          id="description"
          value={this.props.newAddress.address.description}
          updateProp={this.props.updateProp}>Description</TextInputComponent>
        <TextInputComponent
          id="mapLink"
          value={this.props.newAddress.address.mapLink}
          updateProp={this.props.updateProp}>Map Link</TextInputComponent>
        <button className="button is-primary" onClick={this.saveClicked}>Save</button>
      </div>
    )
  }
}



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
