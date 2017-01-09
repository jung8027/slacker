import React from 'react'
import ChatBar from './ChatBar'

const ChatView = props => {
  return (
    <div>
      <div>CHAT VIEW</div>
      <ChatBar {...props}/>
    </div>
  )
}

export default ChatView