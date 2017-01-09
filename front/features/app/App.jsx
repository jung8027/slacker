import React from 'react';
import {Navbar} from '../index';

const App = React.createClass({
  render() {
    const {channel, user, chat} = this.props
    return (
      <div>
        <section className="chat_bar">{chat}</section>
        <section className="channel_list">{channel}</section>
        <section className="userlist">{user}</section>
      </div>
    )
  }
});

export default App;
