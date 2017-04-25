import React,{Component} from 'react';
import NewMeetingTimeForm from '../components/NewMeetingTimeForm';
import dayOfWeekEnumToString from '../helpers/dayOfWeekEnumToString';
import zeroPad from '../helpers/zeroPad';
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
      <div key={i} className="scta-meeting-time-list-item">
        <div className="scta-meeting-time-list-item-time-and-types">
        <div className="scta-meeting-time-control">
            <span className="button is-outlined is-disabled scta-full">{dayOfWeekEnumToString(mt.dayOfWeek)}</span>
            <span className="button is-outlined is-disabled scta-full">{zeroPad(mt.hour)}</span>
            <span className="is-outlined button is-disabled scta-half">:</span>
            <span className="button is-outlined is-disabled scta-full">{zeroPad(mt.minute)}</span>
            <span className="button is-outlined is-disabled scta-fill">{mt.meridiem}</span>
        </div>
        <div className="scta-meeting-type-flex-container">
          {types.length==0?<span className="button is-outlined is-disabled">NONE</span>:types}
        </div>
        </div>
        <div className="scta-meeting-time-list-item-delete">
          <button className="button is-outlined is-danger" onClick={boundDeleteFunc}><span className="fa fa-remove"/></button>
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
            <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" value={this.props.newMeetingForm.newMeeting.name} onInput={this.nameInput} />
              </div>
              <div>
                {this.props.newMeetingForm.newMeeting.meetingTimes.map(this.meetingTimeMapper)}
              </div>
              <div className="scta-meeting-time-list-item-container">
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default NewMeetingForm;
