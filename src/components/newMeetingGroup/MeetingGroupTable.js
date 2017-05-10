import React,{Component} from 'react';
import DeleteTable from '../DeleteTable/DeleteTable';
import PropTypes from 'prop-types';
import './MeetingGroupTable.scss'
class MeetingGroupTable extends Component{
  componentWillMount(){
    this.props.loadMeetingGroups();
  }
  render(){
    let columnConfigs = [DeleteTable.makeHeaderConfObj('Name','name'),DeleteTable.makeHeaderConfObj('Path','path')];

    return (
      <div className="scta-MeetingGroupsTable">
        <DeleteTable columnConfigs={columnConfigs} rowsObject={this.props.meetingGroupsData.meetingGroups} deleteFunction={this.props.deleteMeetingGroup} newLink="/meetingGroups/new"/>
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
