import React from 'react';
import {browserHistory} from 'react-router';
import store from '../../store/store';
// import {CHANNEL_UPDATE} from './channelActions';


const Channel = (props)=> {

  const enterChat=(event)=>{
    browserHistory.push(`${event}`)
  }

  return (
    <div>
      <ul>
      {props.channels?
        props.channels.map((a,idx)=>
        <li onClick={enterChat.bind(this,a.name)} key={idx}>{a.name}</li>):
        "Loading..."}
      </ul>
    </div>
  );
}
          // onClick={this.enterChat.bind(this, a.username)}
  


export default Channel;