import React from 'react';
import moment from 'moment';
//moment("2014-02-27T10:00:00").format('DD-MMM-YYYY');

const Message = props => {
  return (
    <div className="message">
      <h4>{props.msg.User.username}</h4>
      <p>{props.msg.createdAt}</p>
      <p>{props.msg.msg}</p>
    </div>
  )
}

export default Message