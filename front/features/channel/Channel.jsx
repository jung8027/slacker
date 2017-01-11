import React from 'react';
import {Link} from 'react-router';
import store from '../../store/store';
// import {CHANNEL_UPDATE} from './channelActions';

const enterChat = (param)=>{
  console.log(param)
};

const Channel = (props)=> {
  console.log(props)
  // enterChat()=>{
  // console.log(this)
  // }
    // Object.keys(props).map((k)=>console.log('from channel', k, props[k]))
    return (
      <div>
        <ul>
        {props.userChannels.channel?
          <li id={props.userChannels.channel.id}>{props.userChannels.channel.name}</li>
          // onClick={this.enterChat.bind(this, a.username)}
          :'Loading...'}
        </ul>
      </div>
    );
}
  


export default Channel;