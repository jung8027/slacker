import React from 'react';
import {Navbar} from '../index';
import auth from '../../routes/auth';

const App = React.createClass({
  render() {
    const {channel, user, chat} = this.props
    return (
      <div>
        {chat}
        {channel}
        {user}
        <button onClick={auth.logout}>Log Out</button>
      </div>
    )
  }
});

export default App;
