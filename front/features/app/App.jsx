import React from 'react';
import {Navbar} from '../index';

const App = React.createClass({
  render() {
    const {channel, user, chat} = this.props
    return (
      <div>
        {chat}
        {channel}
        {user}
      </div>
    )
  }
});

export default App;
