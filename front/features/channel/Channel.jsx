import React from 'react';
import {Link} from 'react-router';
import store from '../../store/store';

const Channel = (props)=> {
  console.log(props)
  // enterChat() {
  //   <Link
  //   to='/'></Link>
  // }
    // Object.keys(props).map((k)=>console.log('from channel', k, props[k]))
    return (
      <div>
        <ul>
        {props.userChannels.users?
          props.userChannels.users.map((a,key)=>{
          return <li key={key}>{a.username}</li>})
          :false}
        </ul>
      </div>
    );
}
  


export default Channel;