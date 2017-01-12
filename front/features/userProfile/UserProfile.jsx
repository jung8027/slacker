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
	const getList = () => {
    store.dispatch({type:'SHOW_PROFILE', data: false })
  }
    return (
      <section className="users_list">
      	<h1>User Profile</h1>
      	<h1>{props.username}</h1>
      	<p>{props.bio}</p>
      	<button onClick={()=>getList()}>Show List</button>
     </section>
    );
}

export default UserProfile; 
 