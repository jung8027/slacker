import React from 'react';
import {Link} from 'react-router';
import store from '../../store/store';

const UserList = (props)=> {
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

export default UserList;
 