import React,{Component} from 'react';
import * as newMeetingTimeActions from '../actions/newMeetingTimeActions';
import * as newMeetingActions from '../actions/newMeetingActions';
import * as meetingTypeActions from '../actions/meetingTypeActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import dayOfWeekEnumToString from '../helpers/dayOfWeekEnumToString';
import zeroPad from '../helpers/zeroPad';

class MeetingTypeDropdown extends Component{
  constructor(props){
    super(props);
    this.onSelectInput=this.onSelectInput.bind(this);
    this.optionsMapper=this.optionsMapper.bind(this);
    this.defaultValue="default";
  }
  componentWillMount(){
    if(!this.props.isLoading && !this.props.isLoaded){
      this.props.getMeetingTypes();
    }
  }
  onSelectInput(e){
    let key=e.target.value;
    if(key!==this.defaultValue){
      let t = this.props.meetingTypes[key];

      this.props.addMeetingTypeToMeetingTime(t);
    }

  }
  optionsMapper(key){
    let t=this.props.meetingTypes[key];
    return <option key={key} value={key}>{t.name}</option>
  }
  render(){
    let options = Object.keys(this.props.meetingTypes).map(this.optionsMapper);
    return(
      <span className="select">
        <select onInput={this.onSelectInput}>
          <option value={this.defaultValue} key={this.defaultValue}>Select...</option>
          {options}
        </select>
      </span>
    )
  }

}

class NewMeetingTimeForm extends Component{
  constructor(props){
    super(props);
    this.addClicked=this.addClicked.bind(this);
    this.meetingTypeMapper=this.meetingTypeMapper.bind(this);
  }
  addClicked(){
    this.props.addNewMeetingTimeToNewMeeting(this.props.newMeetingTime);
  }
  meetingTypeMapper(key,i){
    debugger;
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
            isLoading={this.props.meetingTypes.isLoading}
            isLoaded={this.props.meetingTypes.isLoaded}
            meetingTypes={this.props.meetingTypes.meetingTypes}
            getMeetingTypes={this.props.getMeetingTypes}
            addMeetingTypeToMeetingTime={this.props.addMeetingTypeToMeetingTime}/>
          <br/>
          <button className="button is-primary" onClick={this.addClicked}>Add</button>
        </div>
      </div>
    )
  }
}

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
    let types = Object.keys(mt.meetingTypes).map(this.meetingTypeMapper);
    let boundDeleteFunc = this.props.newMeetingActions.removeMeetingTimeFromNewMeeting.bind(this,i);
    return (
      <li key={i} className="monospace-font">
        <span className="button is-outlined is-disabled">{dayOfWeekEnumToString(mt.dayOfWeek)}</span>
        <span className="button is-outlined is-disabled">{zeroPad(mt.hour)}</span>
        <span className="is-outlined button is-disabled">:</span>
        <span className="button is-outlined is-disabled">{zeroPad(mt.minute)}</span>
        <span className="button is-outlined is-disabled">{mt.meridiem}</span>
        <button className="button is-outlined is-danger" onClick={boundDeleteFunc}>-</button>
      </li>
    )
  }
  meetingTypeMapper(key,i){
    let t = this.props.newMeetingForm.meetingTimes[i].meetingTypes[key];
    return <span key={key}>{t.abbreviation}</span>
  }
  render(){
    return (
      <div>
        <div>
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" value={this.props.newMeetingForm.newMeeting.name} onInput={this.nameInput} />

          </div>
          <ol>
            {this.props.newMeetingForm.newMeeting.meetingTimes.map(this.meetingTimeMapper)}
          </ol>
          <NewMeetingTimeForm
            newMeetingTime={this.props.newMeetingTimeForm}
            cycleDay={this.props.newMeetingTimeActions.cycleDay}
            cycleHour={this.props.newMeetingTimeActions.cycleHour}
            cycleMinute={this.props.newMeetingTimeActions.cycleMinute}
            toggleMeridiem={this.props.newMeetingTimeActions.toggleMeridiem}
            addNewMeetingTimeToNewMeeting={this.props.newMeetingActions.addNewMeetingTimeToNewMeeting}
            getMeetingTypes={this.props.meetingTypeActions.getMeetingTypes}
            meetingTypes={this.props.meetingTypes}
            addMeetingTypeToMeetingTime={this.props.newMeetingTimeActions.addMeetingTypeToMeetingTime}/>
        </div>
      </div>
    )
  }
}

const NewMeetingPage=(props)=>{
  return (
    <NewMeetingForm
      newMeetingForm={props.newMeetingForm}
      newMeetingTimeForm={props.newMeetingTimeForm}
      newMeetingTimeActions={props.newMeetingTimeActions}
      newMeetingActions={props.newMeetingActions}
      meetingTypes={props.meetingTypes}
      meetingTypeActions={props.meetingTypeActions}

    />
  )
};
function mapStateToProps(state) {
  return {
    newMeetingForm:state.newMeetingForm,
    newMeetingTimeForm:state.newMeetingTimeForm,
    meetingTypes:state.meetingTypes
  }
}
function mapDispatchToProps(dispatch) {
  return {
    newMeetingTimeActions:bindActionCreators(newMeetingTimeActions,dispatch),
    newMeetingActions:bindActionCreators(newMeetingActions,dispatch),
    meetingTypeActions:bindActionCreators(meetingTypeActions,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMeetingPage)
