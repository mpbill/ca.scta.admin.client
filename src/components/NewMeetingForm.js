import React,{Component} from 'react';
import NewMeetingTimeForm from '../components/NewMeetingTimeForm';
import dayOfWeekEnumToString from '../helpers/dayOfWeekEnumToString';
import zeroPad from '../helpers/zeroPad';
import AddressSelectBox from './AddressSelectBox';


class NewMeetingForm extends Component{
  constructor(props){
    super(props);
    this.nameInput=this.nameInput.bind(this);
    this.meetingTimeMapper=this.meetingTimeMapper.bind(this);
    this.meetingTypeMapper=this.meetingTypeMapper.bind(this);
  }
  nameInput(e){
    this.props.newMeetingActions.updateNewMeetingName(e.target.value);
  }
  meetingTimeMapper(mt,i){
    let that=this;
    let types = Object.keys(mt.meetingTypes).map(function (key) {
      return that.meetingTypeMapper(key,i);
    });
    let boundDeleteFunc = this.props.newMeetingActions.removeMeetingTimeFromNewMeeting.bind(this,i);
    return (
      <div key={i} className="scta-meeting-time-card scta-card">
        <div className="scta-meeting-time-card-body">
          <div className="scta-meeting-time-datetime">
            <span className="scta-button-flag-full">{dayOfWeekEnumToString(mt.dayOfWeek)}</span>
            <span className="scta-button-flag-full">{zeroPad(mt.hour)}</span>
            <span className="scta-colon-button-flag">:</span>
            <span className="scta-button-flag-full">{zeroPad(mt.minute)}</span>
            <span className="scta-button-flag-full">{mt.meridiem}</span>
          </div>
          <div className="scta-meeting-time-card-types">
            {types.length==0?<span className="button is-outlined is-disabled">NONE</span>:types}
          </div>
        </div>
        <div className="scta-meeting-time-card-delete">
          <button className="button is-large is-danger" onClick={boundDeleteFunc}>
            <span className="icon is-large"><span className="fa fa-remove fa-3x"/></span>
          </button>
        </div>
      </div>
    )
  }
  meetingTypeMapper(key,i){
    let meetingTime=this.props.newMeetingForm.newMeeting.meetingTimes[i];
    let meetingType=meetingTime.meetingTypes[key];
    return <span key={key} className="button is-outlined is-disabled">{meetingType.abbreviation}</span>
  }
  render(){
    return (
      <div>
        <div>
          <div>

            <div className="name-address-controls">
              <button className="button is-success save-meeting-button">Save</button>
              <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" value={this.props.newMeetingForm.newMeeting.name} onInput={this.nameInput} />
                </div>
              <label className="label">Address</label>
              <AddressSelectBox
                allAddresses={this.props.allAddresses}
                getAllAddresses={this.props.getAllAddresses}
                setNewMeetingsAddress={this.props.newMeetingActions.setNewMeetingsAddress}
              />
              <label className="label">Meeting Types</label>
            </div>
              <div className="scta-meeting-time-card-container">
                <NewMeetingTimeForm
                  newMeetingTime={this.props.newMeetingTimeForm}
                  cycleDay={this.props.newMeetingTimeActions.cycleDay}
                  cycleHour={this.props.newMeetingTimeActions.cycleHour}
                  cycleMinute={this.props.newMeetingTimeActions.cycleMinute}
                  toggleMeridiem={this.props.newMeetingTimeActions.toggleMeridiem}
                  addNewMeetingTimeToNewMeeting={this.props.newMeetingActions.addNewMeetingTimeToNewMeeting}
                  getMeetingTypes={this.props.meetingTypeActions.getMeetingTypes}
                  meetingTypes={this.props.meetingTypes}
                  addMeetingTypeToMeetingTime={this.props.newMeetingTimeActions.addMeetingTypeToMeetingTime}
                  meetingTypeSelectBox={this.props.meetingTypeSelectBox}
                  changeSelected={this.props.meetingTypeSelectBoxActions.changeSelected}
                  setIsFresh={this.props.meetingTypeSelectBoxActions.setIsFresh}
                  removeMeetingType={this.props.newMeetingTimeActions.removeMeetingType}
                />
                {this.props.newMeetingForm.newMeeting.meetingTimes.map(this.meetingTimeMapper)}
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default NewMeetingForm;


