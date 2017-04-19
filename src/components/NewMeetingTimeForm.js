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
  meetingTypeMapper(key,i){
    let t=this.props.newMeetingTime.meetingTypes[key];
    return <span className="button is-outlined is-primary" key={key}>{t.abbreviation}</span>
  }
  render(){
    let typesMapped = Object.keys(this.props.newMeetingTime.meetingTypes).map(this.meetingTypeMapper);
    return (
      <div>
        <h3>New Meeting Time</h3>
        <div className="monospace-font">
          <button className="button is-outlined" onClick={this.props.cycleDay}>{dayOfWeekEnumToString(this.props.newMeetingTime.dayOfWeek)}</button>
          <button className="button is-outlined" onClick={this.props.cycleHour}>{zeroPad(this.props.newMeetingTime.hour)}</button>
          <span className="is-outlined button">:</span>
          <button className="button is-outlined" onClick={this.props.cycleMinute}>{zeroPad(this.props.newMeetingTime.minute)}</button>
          <button className="button is-outlined" onClick={this.props.toggleMeridiem}>{this.props.newMeetingTime.meridiem}</button>
          {typesMapped}
          <MeetingTypeDropdown
            meetingTypeSelectBox={this.props.meetingTypeSelectBox}
            getMeetingTypes={this.props.getMeetingTypes}
            changeSelected={this.props.changeSelected}
            addMeetingTypeToMeetingTime={this.props.addMeetingTypeToMeetingTime}
          />
          <br/>
        </div>
        <button className="button is-primary" onClick={this.addClicked}><span className="fa fa-plus"></span></button>
      </div>
    )
  }
}
export default NewMeetingTimeForm;
