
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './NewMeetingGroupForm.scss';
import TextInputComponent from '../TextInputComponent';
import classNames from 'classnames';
const bindHelper=(that,func)=>{func.bind(that);};
class NewMeetingGroupForm extends Component{

  constructor(props){
    super(props);
    this.saveClicked=this.saveClicked.bind(this);

  }
  saveClicked(){
    this.props.createMeetingGroup(this.props.newMeetingGroupForm.meetingGroup);

  }
  render(){
    let buttonClasses= classNames('button is-success',{
      'is-loading':this.props.newMeetingGroupForm.isLoading,
      'is-disabled':!this.props.newMeetingGroupForm.isValid
    });
    return (
      <div className="container">
        <h1 className="title">New Meeting Group</h1>
        <TextInputComponent value={this.props.newMeetingGroupForm.meetingGroup.name} updateProp={this.props.updateName}>Name</TextInputComponent>
        <TextInputComponent value={this.props.newMeetingGroupForm.meetingGroup.path} updateProp={this.props.updatePath}>Path</TextInputComponent>
        <h2 className="scta-NewMeetingGroupForm_LinkPreview">http://ca-scta.org/meetings/{this.props.newMeetingGroupForm.meetingGroup.path}</h2>
        <button className={buttonClasses} onClick={this.saveClicked}>Save</button>
      </div>
    );
  }
}

NewMeetingGroupForm.propTypes={
  newMeetingGroupForm:PropTypes.shape({
    isLoading:PropTypes.bool,
    meetingGroup:PropTypes.shape({
      name:PropTypes.string,
      path:PropTypes.string
    })
  }).isRequired,
  updateName:PropTypes.func.isRequired,
  updatePath:PropTypes.func.isRequired,
  createMeetingGroup:PropTypes.func.isRequired
};

export default NewMeetingGroupForm;
