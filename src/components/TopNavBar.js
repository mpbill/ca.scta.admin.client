import React from 'react';
import { Link } from 'react-router';
const NavLink=(props)=><Link to={props.to} className="nav-item is-tab" activeClassName="is-active">{props.children}</Link>;
class TopNavBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <nav className="nav">
        <div className="nav-left">
          <NavLink to="/addresses">Addresses</NavLink>
          <NavLink to="/meetings">Addresses</NavLink>
          <NavLink to="/meetingGroups">Meeting Groups</NavLink>
        </div>
      </nav>
    );
  }
}
export default TopNavBar;
