import React from 'react';
import {Navbar} from '../index';
import auth from '../../routes/auth';

const App = React.createClass({
  render() {
    const {channel, user, chat, teamList} = this.props
    return (
      <div className="app">
        <section className="team_list">{teamList}</section>
        <section className="channel_list">{channel}</section>
        <section className="chat_view">{chat}</section>
        <section className="user_list">{user}</section>
        <button onClick={auth.logout}>Log Out</button>
      </div>
    )
  }
});

export default App;
