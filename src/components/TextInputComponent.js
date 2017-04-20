import React,{Component} from 'react';

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
export default TextInputComponent;
