import React from 'react';
import {Link} from 'react-router';
import store from '../../store/store';
// import {CHANNEL_UPDATE} from './channelActions';

const Channel = (props)=> {
  // Object.keys(props.channels).map((a)=>console.log(props.channels[a]))
  // enterChat()=>{
  // console.log(this)
  // }
    // Object.keys(props).map((k)=>console.log('from channel', k, props[k]))
    return (
      <div>
        <ul>
        {props.channels?props.channels.map((a,idx)=><li key={idx}>{a.name}</li>):"Loading..."}
        </ul>
      </div>
    );
}
          // onClick={this.enterChat.bind(this, a.username)}
  


export default Channel;