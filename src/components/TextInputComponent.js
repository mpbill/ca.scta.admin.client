import React,{Component} from 'react';
import PropTypes from 'prop-types';
class TextInputComponent extends Component{
  constructor(props){
    super(props);
    this.inputChanged=this.inputChanged.bind(this);
  }
  inputChanged(e){
    if(this.props.id)
      this.props.updateProp(e.target.id,e.target.value);
    else
      this.props.updateProp(e.target.value);
  }
  render(){
    return (
      <div className="field">
        <label className="label">{this.props.children}</label>
        <div className="control">
          <input className="input" type="text" id={this.props.id} value={this.props.value} onInput={this.inputChanged} />
        </div>
      </div>
    );
  }
}
TextInputComponent.propTypes={
  updateProp:PropTypes.func,
  children:PropTypes.node,
  id:PropTypes.node,
  value:PropTypes.node
};
export default TextInputComponent;
