import React from 'react';
import { Route, IndexRoute } from 'react-router';
import EditAddressContainer from './containers/AddressContainer';
import AddressListPage from './containers/AddressListPage';
import App from './components/App';
import GenericContainer from './containers/GenericContainer';



export default (
  <Route path="/" component={App}>
    <Route path="addresses" component={GenericContainer}>
      <IndexRoute component={AddressListPage}/>
      <Route path="new" component={EditAddressContainer}/>
    </Route>
  </Route>
);
