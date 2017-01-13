import React from 'react';
import moment from 'moment';

// moment(props.msg.createdAt).format('DD-MMM-YYYY');


const Message = props => {
  return (
    <div className="message">
      <h3>{props.msg.User.username}</h3>
      <h5>{moment(props.msg.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h5>
      <p>{props.msg.msg}</p>
    </div>
  )
}

export default Message