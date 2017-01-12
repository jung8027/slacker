import React from 'react';
import $ from 'jquery'
import {Route, IndexRoute} from 'react-router';
import {AppContainer, ChannelContainer, ChatViewContainer, Landing, LoginContainer,JoinTeamContainer, TeamListContainer, UsersListContainer} from '../features';
import auth from './auth.js';
import store from '../store/store';

const redirectToLogin = (nextState, replace) => {
  if(!auth.loggedIn()){
    replace({
      pathname: '/',
    })
  }
}


const getChannelInfo = (nextState, replace) => {
  const {teamname, channelname} = nextState.params
  $.ajax({
    url: `/api/chatroom/${teamname}/${channelname}`,
    type: 'GET'
  })
  .done(channelData => {
    store.dispatch({
      type: 'CHANNEL_INFO',
      channel: {
        id: channelData.id,
        name:channelData.name
      },
      users: channelData.Users,
      messages: channelData.Messages
    })
  })
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
      <Route onEnter={getChannelInfo} component={AppContainer}>
        <Route path="/:team/:channel" 
          components={{
            channel: ChannelContainer, 
            chat: ChatViewContainer, 
            teamList: TeamListContainer, 
            usersList: UsersListContainer
          }} 
        />
      </Route>
    </Route>
  </Route>
);