import React from 'react';
import MeetingGroupTable from '../../components/newMeetingGroup/MeetingGroupTable';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/meetingGroupActions/meetingGroupsDataActions';


export const MeetingGroupTablePageConstructor=(props)=>{
  return (
    <MeetingGroupTable
      deleteMeetingGroup={props.actions.deleteMeetingGroup}
      loadMeetingGroups={props.actions.getAllMeetingGroups}
      meetingGroupsData={props.meetingGroupsData}
    />
  );
};

function mapStateToProps(state) {
  return {
    meetingGroupsData:state.meetingGroup.meetingGroupsData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(actions,dispatch)
  };
}
let MeetingGroupTablePage = connect(mapStateToProps,mapDispatchToProps)(MeetingGroupTablePageConstructor);

export default MeetingGroupTablePage;
