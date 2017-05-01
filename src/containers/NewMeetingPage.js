import React from 'react';
import * as newMeetingTimeActions from '../actions/newMeetingTimeActions';
import * as newMeetingActions from '../actions/newMeetingActions';
import * as meetingTypeActions from '../actions/meetingTypeActions';
import * as meetingTypeSelectBoxActions from '../actions/meetingTypeSelectBoxActions';
import * as allAddressActions from '../actions/allAddressesActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NewMeetingForm from '../components/NewMeetingForm';
import PropTypes from 'prop-types';

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
  );
};
NewMeetingPage.propTypes={
  newMeetingForm:PropTypes.object,
  newMeetingTimeForm:PropTypes.object,
  newMeetingTimeActions:PropTypes.object,
  newMeetingActions:PropTypes.object,
  meetingTypes:PropTypes.object,
  meetingTypeActions:PropTypes.object,
  meetingTypeSelectBoxActions:PropTypes.object,
  meetingTypeSelectBox:PropTypes.object,
  getAllAddresses:PropTypes.object,
  allAddresses:PropTypes.object,
  allAddressActions:PropTypes.object
};
function mapStateToProps(state) {
  return {
    newMeetingForm:state.newMeetingForm,
    newMeetingTimeForm:state.newMeetingTimeForm,
    meetingTypes:state.meetingTypes,
    meetingTypeSelectBox:state.meetingTypeSelectBox,
    allAddresses:state.allAddresses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    newMeetingTimeActions:bindActionCreators(newMeetingTimeActions,dispatch),
    newMeetingActions:bindActionCreators(newMeetingActions,dispatch),
    meetingTypeActions:bindActionCreators(meetingTypeActions,dispatch),
    meetingTypeSelectBoxActions:bindActionCreators(meetingTypeSelectBoxActions,dispatch),
    allAddressActions:bindActionCreators(allAddressActions,dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMeetingPage);
