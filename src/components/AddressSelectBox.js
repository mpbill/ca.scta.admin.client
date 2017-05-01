import React,{Component} from 'react';

class AddressSelectBox extends Component{
  constructor(props){
    super(props);
    this.optionsMapper=this.optionsMapper.bind(this);
    this.onSelectInput=this.onSelectInput.bind(this);
    this.selectValue="select";
  }
  componentWillMount(){
    if(this.props.allAddresses.isLoading===false && this.props.allAddresses.isLoaded==false){
      this.props.getAllAddresses();
    }
  }
  optionsMapper(k){
    let address = this.props.allAddresses.addresses[k];
    return <option key={k} value={k}>{address.street1}</option>
  }
  onSelectInput(e){
    let k = e.target.value;
    let selectedAddress;
    if(k===this.selectValue){
      selectedAddress={};
    }
    else {
      selectedAddress = this.props.allAddresses.addresses[k];
    }
    this.props.setNewMeetingsAddress(selectedAddress);
  }
  render(){
    let options = Object.keys(this.props.allAddresses.addresses).map(this.optionsMapper);
    options.unshift(<option key={0} value={this.selectValue}>Select...</option>);
    return (
      <div className="control">
        <div className="select address-select">
          <select onInput={this.onSelectInput}>
            {options}
          </select>
        </div>
      </div>
    )
  }
}
export default AddressSelectBox;
