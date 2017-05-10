import React from 'react';
import NewMeetingGroupForm from '../../components/newMeetingGroup/NewMeetingGroupForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/meetingGroupActions/newMeetingGroupActions';
export const NewMeetingGroupPageConstructor=(props)=>{
  return (
    <NewMeetingGroupForm
      updateName={props.actions.updateName}
      updatePath={props.actions.updatePath}
      newMeetingGroupForm={props.newMeetingGroupForm}
      createMeetingGroup={props.actions.saveNewMeetingGroup} />
  );
};

function mapStateToProps(state) {
  return {
    newMeetingGroupForm:state.meetingGroup.newMeetingGroupForm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(actions,dispatch)
  };
}
let NewMeetingGroupPage = connect(mapStateToProps,mapDispatchToProps)(NewMeetingGroupPageConstructor);

export default NewMeetingGroupPage;
