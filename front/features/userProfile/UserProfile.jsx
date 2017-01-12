 import React from 'react';
import {Link} from 'react-router';
import store from '../../store/store';

const UserProfile = (props)=> {
    return (
      <section className="users_list">
        <ul>
        {props.username.username?
          props.username.username.map((a,key)=>{
          return <li key={key}>{a.username}{a.bio}</li>})
          :false}
        </ul>
      </section>

      /*<div>
        {props.userChannels.}
      </div>*/
    );
}

export default UserProfile; 
 