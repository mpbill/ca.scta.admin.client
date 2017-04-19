import React,{Component} from 'react';
import * as newMeetingTimeActions from '../actions/newMeetingTimeActions';
import * as newMeetingActions from '../actions/newMeetingActions';
import * as meetingTypeActions from '../actions/meetingTypeActions';
import * as meetingTypeSelectBoxActions from '../actions/meetingTypeSelectBoxActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NewMeetingForm from '../components/NewMeetingForm';


const NewMeetingPage=(props)=>{
  return (
    <NewMeetingForm
      newMeetingForm={props.newMeetingForm}
      newMeetingTimeForm={props.newMeetingTimeForm}
      newMeetingTimeActions={props.newMeetingTimeActions}
      newMeetingActions={props.newMeetingActions}
      meetingTypes={props.meetingTypes}
      meetingTypeActions={props.meetingTypeActions}
      meetingTypeSelectBoxActions={props.meetingTypeSelectBoxActions}
      meetingTypeSelectBox={props.meetingTypeSelectBox}

    />
  )
};
function mapStateToProps(state) {
  return {
    newMeetingForm:state.newMeetingForm,
    newMeetingTimeForm:state.newMeetingTimeForm,
    meetingTypes:state.meetingTypes,
    meetingTypeSelectBox:state.meetingTypeSelectBox
  }
}
function mapDispatchToProps(dispatch) {
  return {
    newMeetingTimeActions:bindActionCreators(newMeetingTimeActions,dispatch),
    newMeetingActions:bindActionCreators(newMeetingActions,dispatch),
    meetingTypeActions:bindActionCreators(meetingTypeActions,dispatch),
    meetingTypeSelectBoxActions:bindActionCreators(meetingTypeSelectBoxActions,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMeetingPage)
