import React,{Component} from 'react';
import * as newMeetingTimeActions from '../actions/newMeetingTimeActions';
import * as newMeetingActions from '../actions/newMeetingActions';
import * as meetingTypeActions from '../actions/meetingTypeActions';
import * as meetingTypeSelectBoxActions from '../actions/meetingTypeSelectBoxActions';
import * as allAddressActions from '../actions/allAddressesActions';
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
      getAllAddresses={props.allAddressActions.getAllAddresses}
      allAddresses={props.allAddresses}

    />
  )
};
function mapStateToProps(state) {
  return {
    newMeetingForm:state.newMeetingForm,
    newMeetingTimeForm:state.newMeetingTimeForm,
    meetingTypes:state.meetingTypes,
    meetingTypeSelectBox:state.meetingTypeSelectBox,
    allAddresses:state.allAddresses
  }
}
function mapDispatchToProps(dispatch) {
  return {
    newMeetingTimeActions:bindActionCreators(newMeetingTimeActions,dispatch),
    newMeetingActions:bindActionCreators(newMeetingActions,dispatch),
    meetingTypeActions:bindActionCreators(meetingTypeActions,dispatch),
    meetingTypeSelectBoxActions:bindActionCreators(meetingTypeSelectBoxActions,dispatch),
    allAddressActions:bindActionCreators(allAddressActions,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMeetingPage)
