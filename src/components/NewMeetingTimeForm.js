import React,{Component} from 'react';
import MeetingTypeDropdown from './MeetingTypeDropdown';
import dayOfWeekEnumToString from '../helpers/dayOfWeekEnumToString';
import zeroPad from '../helpers/zeroPad';
class NewMeetingTimeForm extends Component{
  constructor(props){
    super(props);
    this.addClicked=this.addClicked.bind(this);
    this.meetingTypeMapper=this.meetingTypeMapper.bind(this);
  }
  addClicked(){
    this.props.addNewMeetingTimeToNewMeeting(this.props.newMeetingTime);
    this.props.setIsFresh();
  }
  deleteType(key){
    this.props.removeMeetingType(key);
  }
  meetingTypeMapper(key,i){
    let boundDeleteTypeClicked = this.deleteType.bind(this,key);

    let t=this.props.newMeetingTime.meetingTypes[key];
    return <button onClick={boundDeleteTypeClicked}  className="button is-outlined is-primary" key={key}>{t.abbreviation}</button>
  }
  render(){
    let meetingTypeKeysArray=Object.keys(this.props.newMeetingTime.meetingTypes);
    let typesMapped = meetingTypeKeysArray.map(this.meetingTypeMapper);
    return (
    <div className="panel">
      <p className="panel-heading">
        New Meeting Time
      </p>

      <div className="panel-block">
        <div className="columns">
          <div className="column is-narrow">
            <span className="monospace-font">
            <button className="button is-outlined" onClick={this.props.cycleDay}>{dayOfWeekEnumToString(this.props.newMeetingTime.dayOfWeek)}</button>
            <button className="button is-outlined" onClick={this.props.cycleHour}>{zeroPad(this.props.newMeetingTime.hour)}</button>
            <span className="is-outlined button">:</span>
            <button className="button is-outlined" onClick={this.props.cycleMinute}>{zeroPad(this.props.newMeetingTime.minute)}</button>
            <button className="button is-outlined" onClick={this.props.toggleMeridiem}>{this.props.newMeetingTime.meridiem}</button>

          </span>
          </div>
          <div className="column">
            <MeetingTypeDropdown
              meetingTypeSelectBox={this.props.meetingTypeSelectBox}
              getMeetingTypes={this.props.getMeetingTypes}
              changeSelected={this.props.changeSelected}
              addMeetingTypeToMeetingTime={this.props.addMeetingTypeToMeetingTime}
            />
          </div>
        </div>
      </div>
      <div className="panel-block">
          <span className="meeting-type-container">
          {typesMapped.length==-1?<span className="empty-line button" />:typesMapped}
          </span>
      </div>
      <div className="panel-block">
        <button className="button is-primary" onClick={this.addClicked}><span className="fa fa-plus" /></button>
      </div>
    </div>

    )
  }
}
export default NewMeetingTimeForm;
