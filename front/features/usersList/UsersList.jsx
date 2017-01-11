import React from 'react';
import {Link} from 'react-router';
import store from '../../store/store';

const UserList = (props)=> {
    return (
      <section className="users_list">
        <ul>
        {props.userChannels.users?
          props.userChannels.users.map((a,key)=>{
          return <li key={key}>{a.username}</li>})
          :false}
        </ul>
      </section>
    );
}

export default UserList;
 