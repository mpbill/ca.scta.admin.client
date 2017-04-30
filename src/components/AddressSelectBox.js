import React,{Component} from 'react';

class AddressSelectBox extends Component{
  constructor(){
    this.optionsMapper=this.optionsMapper.bind(this);
  }
  componentWillMount(){
    if(this.props.allAddresses.isLoading===false && this.props.allAddresses.isLoaded==false){
      this.props.getAllAddresses();
    }
  }
  optionsMapper(k){
    let address = this.props.allAddresses.addresses[k];
    return <option key={k}>{address.street1}</option>
  }
  render(){
    let options = Object.keys(this.props.allAddresses.addresses).map(this.optionsMapper);
    options.unshift(<option key={0}>Select...</option>);
    return (
      <div className="control address-select-box">
        <div className="select address-select">
          <select>
            {options}
          </select>
        </div>
      </div>
    )
  }
}
export default AddressSelectBox;
