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
import RoomShowContainer from './rooms/room_show/room_show_container';

import RoomFormContainer from './rooms/room_form/room_form_container';
import RoomForm2Container from './rooms/room_form/room_form2_container';


import RoomMap from './rooms/room_map';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/homes');
    }
  };


  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ForyouIndexContainer}/>
        <Route path='all' component={ForyouIndexContainer}/>
        <Route path='homes' component={HomesIndexContainer}/>
        <Route path='experiences' component={ExperiencesIndexContainer}/>
        <Route path='places' component={PlacesIndexContainer}/>
        <Route path="/rooms/new" component={RoomForm2Container} onEnter={_ensureLoggedIn} />
        <Route path="/rooms/my" component={HomesIndexContainer} onEnter={_ensureLoggedIn} />
        <Route path='rooms/:roomId' component={RoomShowContainer}/>
      </Route>
      <Route path='/testmap' component={RoomMap}/>
    </Router>
  </Provider>
)};

export default Root;
