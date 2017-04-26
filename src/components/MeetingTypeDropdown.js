import React,{Component} from 'react';
class MeetingTypeDropdown extends Component{
  constructor(props){
    super(props);
    this.onSelectInput=this.onSelectInput.bind(this);
    this.optionsMapper=this.optionsMapper.bind(this);
    this.defaultValue="default";
  }
  componentWillMount(){
    if(!this.props.meetingTypeSelectBox.isPopulated){
      this.props.getMeetingTypes();
    }
  }
  onSelectInput(e){
    let key=e.target.value;
    if(key!==this.defaultValue){
      let t = this.props.meetingTypeSelectBox.meetingTypes[key];
      this.props.changeSelected(key);
      this.props.addMeetingTypeToMeetingTime(t);
    }

  }
  optionsMapper(key){
    let t=this.props.meetingTypeSelectBox.meetingTypes[key];
    return <option key={key} value={key}>{t.name}</option>
  }
  render(){
    let options = Object.keys(this.props.meetingTypeSelectBox.meetingTypes).map(this.optionsMapper);
    return(
      <span className="select scta-meeting-type-dropdown">
        <select onInput={this.onSelectInput}>
          <option value={this.defaultValue} key={this.defaultValue}>Select...</option>
          {options}
        </select>
      </span>
    )
  }
}
export default MeetingTypeDropdown;
