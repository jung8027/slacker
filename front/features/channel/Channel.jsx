import React from 'react';
import store from '../../store/store'

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: [],
    };

    // store.subscribe(() => {
    //   this.setState({
    //     userInfo: store.getState().userInfo;
    //   });
    // });


  }

  render() {
    return (
      <div>
        {this.state.userInfo.map((channel,keys) => 
        	<li id={keys} onClick={this.channelSelect}>{channel}</li> )}
      </div>
    );
  }
};


export default Channel;