import React from 'react';
import * as actions from '../../actions/meetingGroupActions/meetingGroupsDataActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './MeetingGroupSelectBox.scss';

let MeetingGroupSelectBoxComponent=function (props) {
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

  let onInput = (e)=>{props.selectionChanged(e.target.value);};
  onInput=onInput.bind(this);

  return (
    <div className="control">
      <div className="select scta-MeetingGroupSelectBox_SelectContainer">
        <select onInput={onInput} className="scta-MeetingGroupSelectBox_Select">
          {options}
        </select>
      </div>
    </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetingGroupSelectBoxComponent);
