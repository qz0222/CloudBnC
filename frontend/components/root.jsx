import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import ForyouIndexContainer from './main/foryou/foryou_index_container';
import HomesIndexContainer from './main/homes/homes_index_container';
import PlacesIndexContainer from './main/places/places_index_container';
import ExperiencesIndexContainer from './main/experiences/experiences_index_container';

import roomIndexContainer from './rooms/room_index_container';

const Root = ({ store }) => {
  console.log(hashHistory);
  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ForyouIndexContainer}/>
        <Route path='signup' component={SessionFormContainer}/>
        <Route path='login' component={SessionFormContainer}/>
        <Route path='all' component={ForyouIndexContainer}/>
        <Route path='homes' component={HomesIndexContainer}/>
        <Route path='experiences' component={ExperiencesIndexContainer}/>
        <Route path='places' component={PlacesIndexContainer}/>
        <Route path='rooms' component={roomIndexContainer}/>
      </Route>
    </Router>
  </Provider>
)};

export default Root;
