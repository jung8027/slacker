 import React from 'react';
import {Link} from 'react-router';
import store from '../../store/store';

        // <ul>
        // {props.userChannels.users?
        //   props.userChannels.users.map((a,key)=>{
        //   return <li key={key}>{a.username}{a.bio}</li>})
        //   :false}
        // </ul>
const UserProfile = (props)=> {
    return (
      <section className="users_list">
        <ul
        {props.username.username?
          props.username.username.map((a,key)=>{
          return <li key={key}>{a.username}{a.bio}</li>})
          :false}
        </ul>
      /*<div>
        {props.userChannels.}
      </div>*/
    );
}

export default UserProfile; 
 