import React,{Component} from 'react';
import DeleteTable from '../DeleteTable/DeleteTable';
import PropTypes from 'prop-types';
import './MeetingGroupTable.scss';
class MeetingGroupTable extends Component{
  render(){
    let loadMeetingGroups = this.props.toggleLoading;

    let columnConfigs = [DeleteTable.makeHeaderConfObj('Name','name'),DeleteTable.makeHeaderConfObj('Path','path')];

    return (
      <div className="scta-MeetingGroupsTable">
        <DeleteTable
          isLoaded={this.props.meetingGroupsData.isLoaded}
          loadFunction={this.props.loadMeetingGroups}
          isLoading={this.props.meetingGroupsData.isLoading}
          columnConfigs={columnConfigs}
          rowsObject={this.props.meetingGroupsData.meetingGroups}
          deleteFunction={this.props.deleteMeetingGroup}
          newLink="/meetingGroups/new"/>
      </div>
    );
  }
}
MeetingGroupTable.propTypes={
  meetingGroupsData:PropTypes.object,
  deleteMeetingGroup:PropTypes.func,
  loadMeetingGroups:PropTypes.func
};

export default MeetingGroupTable;
