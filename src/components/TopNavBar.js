import React from 'react';
import { Link, IndexLink } from 'react-router';
class TopNavBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <nav className="nav">
          <Link to="/addresses" className="nav-item is-tab" activeClassName="is-active">Addresses</Link>
          <Link to="/meetings" className="nav-item is-tab" activeClassName="is-active">Meetings</Link>
      </nav>
    )
  }
}
export default TopNavBar;
