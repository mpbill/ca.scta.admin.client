import React from 'react';
import { Route, IndexRoute,IndexRedirect} from 'react-router';
import EditAddressContainer from './containers/AddressContainer';
import AddressListPage from './containers/AddressListPage';
import App from './components/App';
import GenericContainer from './containers/GenericContainer';
import NewMeetingPage from './containers/NewMeetingPage';
import DeleteTableTestPage from './containers/DeleteTableTestPage';

export default (
  <Route path="/" component={App}>
    <Route path="addresses" component={GenericContainer}>
      <IndexRoute component={AddressListPage}/>
      <Route path="new" component={EditAddressContainer}/>
    </Route>
    <Route path="meetings" component={GenericContainer}>
      <IndexRedirect to="/meetings/new"/>
      <Route path="new" component={NewMeetingPage}/>
    </Route>
    <Route path="deleteTable" component={DeleteTableTestPage}/>
  </Route>
);
