import React from 'react';
import moment from 'moment';

// moment(props.msg.createdAt).format('DD-MMM-YYYY');


const Message = props => {
  return (
    <div className="message">
      <h4>{props.msg.User.username}</h4>
      <p>{moment(props.msg.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
      <p>{props.msg.msg}</p>
    </div>
  )
}

export default Message