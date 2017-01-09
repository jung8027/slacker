import React from 'react';
import {Navbar} from '../index';

const Landing = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

export default Landing;