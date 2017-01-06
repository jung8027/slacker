import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App, Login, ChatBarContainer} from '../features';
import auth from './auth.js'


const Channel = props => {
  return (<div>Channel</div>)
}

const Member = props => {
  return (<div>Member</div>)
};

const redirectToLogin = (nextState, replace) => {
  if(!auth.loggedIn()){
    replace({
      pathname: '/',
    })
  }
}

export default (
  <Route path="/">
    <IndexRoute component={Login}/>
    <Route onEnter={redirectToLogin}>
      <Route component={App}>
        <Route path="/:team/:channel" components={{channel: Channel, member: Member, chat: ChatBarContainer}} />
      </Route>
    </Route>
  </Route>
);

