import React from 'react';
import {Link} from 'react-router';
import store from '../../store/store';
import $ from 'jquery';
import UserProfile from '../userProfile/UserProfile.jsx';

const UserList = (props)=> {
  const getProfile = (userid) => {
    store.dispatch({type:'SHOW_PROFILE', data: true });
    $.ajax({
      url:'/api/user/userprofile/'+ userid,
      type: "GET"
    }).done(data => store.dispatch({type: 'GET_PROFILE', bio: data.bio, username: data.username}))
  }
    return (
      <section className="users_list">
        <ul>
        {props.userChannels.users?
          props.userChannels.users.map((a,key)=>{
          return  <li key={key} onClick={()=>getProfile(a.id)}>{a.username}</li>})
          :false}
        </ul>
      </section>
    );
}

export default UserList;  
 