import React from 'react';
import moment from 'moment';

// moment(props.msg.createdAt).format('DD-MMM-YYYY');


const Message = props => {
  return (
    <article className="message">
      <div className="square photo"><img src='/slack.png'/></div>
      <div className="message_inner">
        <div className="username_date">
          <h3>{props.msg.User.username}</h3>
          <h5>{moment(props.msg.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h5>
        </div>
        <p>{props.msg.msg}</p>
      </div>
    </article>
  )
}

export default Message