import React from 'react';
import * as actions from '../../actions/meetingGroupActions/meetingGroupsDataActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


let MeetingGroupSelectBoxComponent=function (props) {
  debugger;
  let optionsMapper=(key)=>{
    return (
      <option key={key} value={key}>
        {props.meetingGroupsData.meetingGroups[key].name}
      </option>
    );
  };

  if(!props.meetingGroupsData.isLoading && !props.meetingGroupsData.isLoaded){
    props.actions.getAllMeetingGroups();
  }
  let options = Object.keys(props.meetingGroupsData.meetingGroups).map(optionsMapper);

  let onInput = (e)=>{props.selectionChanged(e.target.value)};
  onInput=onInput.bind(this);

  return (
    <div className="control">
      <div className="select">
        <select onInput={onInput}>
          {options}
        </select>
      </div>
    </div>
  )
};

function mapStateToProps(state) {
  debugger;
  return {
    meetingGroupsData:state.meetingGroup.meetingGroupsData
  };
}
function mapDispatchToProps(dispatch) {
  debugger;
  return {
    actions:bindActionCreators(actions,dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetingGroupSelectBoxComponent);
