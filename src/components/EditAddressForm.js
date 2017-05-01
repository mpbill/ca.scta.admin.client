import React,{Component} from 'react';
import TextInputComponent from './TextInputComponent';
import PropTypes from 'prop-types';
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
          id="name"
          value={this.props.newAddress.address.name}
          updateProp={this.props.updateProp}>Name</TextInputComponent>
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
    );
  }
}
EditAddressForm.propTypes={
  updateProp:PropTypes.func,
  newAddress:PropTypes.object
};
export default EditAddressForm;
