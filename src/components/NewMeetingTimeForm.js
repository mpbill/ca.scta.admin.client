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
  meetingTypeMapper(key){
    let boundDeleteTypeClicked = this.deleteType.bind(this,key);

    let t=this.props.newMeetingTime.meetingTypes[key];
    return <button onClick={boundDeleteTypeClicked}  className="button is-outlined is-primary" key={key}>{t.abbreviation}</button>
  }

  render(){
    let meetingTypeKeysArray=Object.keys(this.props.newMeetingTime.meetingTypes);
    let typesMapped = meetingTypeKeysArray.map(this.meetingTypeMapper);
    return (
    <div className="scta-meeting-time-card scta-card">
      <div className="scta-meeting-time-card-body">
        <div className="scta-meeting-time-datetime">
          <span className="scta-button-flag-full">{dayOfWeekEnumToString(this.props.newMeetingTime.dayOfWeek)}</span>
          <span className="scta-button-flag-full">{zeroPad(this.props.newMeetingTime.hour)}</span>
          <span className="scta-colon-button-flag">:</span>
          <span className="scta-button-flag-full">{zeroPad(this.props.newMeetingTime.minute)}</span>
          <span className="scta-button-flag-full">{this.props.newMeetingTime.meridiem}</span>
        </div>
        <MeetingTypeDropdown
          meetingTypeSelectBox={this.props.meetingTypeSelectBox}
          getMeetingTypes={this.props.getMeetingTypes}
          changeSelected={this.props.changeSelected}
          addMeetingTypeToMeetingTime={this.props.addMeetingTypeToMeetingTime}
        />
        <div className="scta-meeting-time-card-types">
          {typesMapped.length==0?<span className="button is-outlined is-primary">NONE</span>:typesMapped}
        </div>
      </div>
      <div className="scta-meeting-time-card-delete">
        <button className="button is-large is-success" onClick={this.addClicked}>
          <span className="icon is-large"><span className="fa fa-plus fa-3x"/></span>
        </button>
      </div>
    </div>
      // <div>
      //   <div>
      //     <h3>New Meeting Time</h3>
      //   </div>
      //   <div>
      //     <span className="monospace-font">
      //       <button className="button is-outlined" onClick={this.props.cycleDay}>{dayOfWeekEnumToString(this.props.newMeetingTime.dayOfWeek)}</button>
      //       <button className="button is-outlined" onClick={this.props.cycleHour}>{zeroPad(this.props.newMeetingTime.hour)}</button>
      //       <span className="is-outlined button">:</span>
      //       <button className="button is-outlined" onClick={this.props.cycleMinute}>{zeroPad(this.props.newMeetingTime.minute)}</button>
      //       <button className="button is-outlined" onClick={this.props.toggleMeridiem}>{this.props.newMeetingTime.meridiem}</button>
      //
      //     </span>
      //     <button className="button is-primary" onClick={this.addClicked}><span className="fa fa-plus" /></button>
      //
      //   </div>
      //   <div>
      //     <span className="meeting-type-container">
      //     {typesMapped.length==0?<span className="empty-line button" />:typesMapped}
      //     </span>
      //   </div>
      //   <div>
      //     <MeetingTypeDropdown
      //       meetingTypeSelectBox={this.props.meetingTypeSelectBox}
      //       getMeetingTypes={this.props.getMeetingTypes}
      //       changeSelected={this.props.changeSelected}
      //       addMeetingTypeToMeetingTime={this.props.addMeetingTypeToMeetingTime}
      //     />
      //
      //   </div>
      // </div>
    )
  }
}
export default NewMeetingTimeForm;
