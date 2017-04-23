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
      <div className="columns is-gapless">
        <div className="column is-12">
          <h3>New Meeting Time</h3>
        </div>
        <div className="column is-12">
          <span className="monospace-font">
            <button className="button is-outlined" onClick={this.props.cycleDay}>{dayOfWeekEnumToString(this.props.newMeetingTime.dayOfWeek)}</button>
            <button className="button is-outlined" onClick={this.props.cycleHour}>{zeroPad(this.props.newMeetingTime.hour)}</button>
            <span className="is-outlined button">:</span>
            <button className="button is-outlined" onClick={this.props.cycleMinute}>{zeroPad(this.props.newMeetingTime.minute)}</button>
            <button className="button is-outlined" onClick={this.props.toggleMeridiem}>{this.props.newMeetingTime.meridiem}</button>

          </span>
          <button className="button is-primary" onClick={this.addClicked}><span className="fa fa-plus" /></button>

        </div>
        <div className="column is-12">
          <span className="meeting-type-container">
          {typesMapped.length==0?<span className="empty-line button" />:typesMapped}
          </span>
        </div>
        <div className="column is-12">
          <MeetingTypeDropdown
            meetingTypeSelectBox={this.props.meetingTypeSelectBox}
            getMeetingTypes={this.props.getMeetingTypes}
            changeSelected={this.props.changeSelected}
            addMeetingTypeToMeetingTime={this.props.addMeetingTypeToMeetingTime}
          />

        </div>
      </div>
    )
  }
}
export default NewMeetingTimeForm;
