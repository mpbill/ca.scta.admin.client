
import React,{Component} from 'react';
import PropTypes from 'prop-types';

import TextInputComponent from '../TextInputComponent';
import classNames from 'classnames';

class NewMeetingGroupForm extends Component{

  render(){
    let buttonClasses= classNames('button is-success',{'is-loading':this.props.newMeetingGroupForm.isLoading});
    return (
      <div>
        <h3>New Meeting Group</h3>
        <TextInputComponent value={this.props.newMeetingGroupForm.meetingGroup.name} updateProp={this.props.updateName}>Name</TextInputComponent>
        <TextInputComponent value={this.props.newMeetingGroupForm.meetingGroup.path} updateProp={this.props.updatePath}>Name</TextInputComponent>
        <button className={buttonClasses}>Save</button>
      </div>
    )
  }
}

NewMeetingGroupForm.propTypes={
  newMeetingGroupForm:PropTypes.shape({
    isLoading:PropTypes.bool,
    meetingGroup:PropTypes.shape({
      name:PropTypes.string,
      path:PropTypes.string
    })
  }),
  updateName:PropTypes.func,
  updatePath:PropTypes.func
};

export default NewMeetingGroupForm;
