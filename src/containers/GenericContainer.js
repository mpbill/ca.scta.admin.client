import React, {Component} from 'react';
import PropTypes from 'prop-types';
class GenericContainer extends Component{
  render(){
    return (
      <div className="genericContainer">
        {this.props.children}
      </div>
    );
  }
}
GenericContainer.propTypes={
  children:PropTypes.element
};
export default GenericContainer;
