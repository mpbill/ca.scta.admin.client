import React, {Component} from 'react';
import * as actions from '../actions/nextAreaMeetingActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
class NextAreaMeetingForm extends Component{
  constructor(props){
    super(props);
    this.updateTextField = this.updateTextField.bind(this);
    this.updateDate=this.updateDate.bind(this);
    this.updateTime=this.updateTime.bind(this);
  }
  componentWillMount(){


  }
  updateTextField(e){
    this.props.updateTextField(e.target.id,e.target.value);
  }
  updateDate(d){
    this.props.updateDate(d);
  }
  updateTime(t){
    this.props.updateTime(t);
  }
  render(){

    return (
      <div className="column is-4 is-offset-4">
        <label className="label">Date</label>
        <div className="control">
          <DatePicker selected={this.props.nextAreaMeeting.newNextAreaMeeting.data.dateTime} onChange={this.updateDate}/>
        </div>
        <label className="label">Time</label>
        <div className="control">
          <TimePicker
            showSecond={false}
            value={this.props.nextAreaMeeting.newNextAreaMeeting.data.dateTime}
            format={'h:mm a'}
            use12Hours
            onChange={this.updateTime}
          />
        </div>
        <label className="label">Location Name</label>
        <div className="control">
          <input className="input" type="text" id={'locationName'} value={this.props.nextAreaMeeting.newNextAreaMeeting.data.locationName} onChange={this.updateTextField} />
        </div>
        <label className="label">Street</label>
        <div className="control">
          <input className="input" type="text" id={'street'} value={this.props.nextAreaMeeting.newNextAreaMeeting.data.street} onChange={this.updateTextField} />
        </div>
        <label className="label">City</label>
        <div className="control">
          <input className="input" type="text" id={'city'} value={this.props.nextAreaMeeting.newNextAreaMeeting.data.city}  onChange={this.updateTextField} />
        </div>
        <label className="label">State</label>
        <div className="control">
          <input className="input" type="text" id={'state'} value={this.props.nextAreaMeeting.newNextAreaMeeting.data.state}  onChange={this.updateTextField} />
        </div>
        <label className="label">Zip</label>
        <div className="control">
          <input className="input" type="text" id={'zip'} value={this.props.nextAreaMeeting.newNextAreaMeeting.data.zip} onChange={this.updateTextField} />
        </div>
        <label className="label">Map Link</label>
        <div className="control">
          <input className="input" type="text" id={'mapLink'} value={this.props.nextAreaMeeting.newNextAreaMeeting.data.mapLink}  onChange={this.updateTextField} />
        </div>


        <div className="control">
          <button className="button is-primary" onClick={this.loginClicked}>Save</button>
        </div>
      </div>
    )
  }
}

export const NextAreaMeetingPage=(props)=>{

  return (
    <NextAreaMeetingForm
      nextAreaMeeting={props.nextAreaMeeting}
      updateTextField={props.actions.updateTextField}
      updateDate={props.actions.updateDate}
      updateTime={props.actions.updateTime}
      />

  );
};


function mapStateToProps(state) {

  return {
    nextAreaMeeting:state.nextAreaMeeting
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
)(NextAreaMeetingPage)
