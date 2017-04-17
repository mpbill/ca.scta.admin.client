import React, {Component} from 'react';

class GenericContainer extends Component{
  render(){
    return (
      <div className="genericContainer">
        {this.props.children}
      </div>
    )
  }
}
module.exports=GenericContainer;
