import React from 'react';
import _ from 'lodash';
import ChatBar from './ChatBar';
import Message from './Message'
import {socket} from '../../socket';

const ChatView = React.createClass({
  componentDidMount(){

    socket.on("received-message", message => {
      console.log(message)
      if(this.props.params.channel === message.Chatroom.name){
        this.props.updateSocketMessages(message)
      } else {
        console.log("no message")
      }
    });
  },
  render() {
    const {chatroomMessages,socketMessages} = this.props;
    return (
      <section className="chat_view">
        <div className="view">
          <div>CHAT VIEW</div>
          {chatroomMessages && _.map(chatroomMessages, (msg, index) => (
              <Message key ={index} msg={msg} />
            )
          )}
          {socketMessages && _.map(socketMessages, (msg, index) => (
              <Message key ={index} msg={msg} />
            )
          )}
        </div>
        <ChatBar {...this.props}/>
      </section>
    )
  }
})

export default ChatView