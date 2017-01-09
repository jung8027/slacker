import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App, ChannelContainer, ChatBarContainer, Landing, LoginContainer,JoinTeamContainer, UserContainer} from '../features';
import auth from './auth.js'


const redirectToLogin = (nextState, replace) => {
  if(!auth.loggedIn()){
    replace({
      pathname: '/',
    })
  }
}

export default (
  <Route>
    <Route path='/' component={Landing}>
      <IndexRoute component={LoginContainer}/>
      <Route onEnter={redirectToLogin}>
        <Route path="/jointeam" component={JoinTeamContainer}/>
      </Route>
    </Route>
    <Route onEnter={redirectToLogin}>
      <Route component={App}>
        <Route path="/:team/:channel" components={{channel: ChannelContainer, user: UserContainer, chat: ChatBarContainer}} />
      </Route>
    </Route>
  </Route>
);

