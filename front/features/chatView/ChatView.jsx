import React from 'react';
import _ from 'lodash';
import ChatBar from './ChatBar';
import Message from './Message'
import {socket} from '../../socket';

const ChatView = React.createClass({
  componentDidMount(){

    socket.on("received-message", message => {
      console.log(message)
      this.props.updateSocketMessages(message)
    });
  },
  render() {
    const {socketMessages} = this.props;
    return (
      <div>
        <div>CHAT VIEW</div>
        {socketMessages && _.map(socketMessages, (msg, index) => (
            <Message key ={index} msg={msg} />
          )
        )}
        <ChatBar {...this.props}/>
      </div>
    )
  }
})

export default ChatView