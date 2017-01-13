import React from 'react';
import {Link} from 'react-router';
import store from '../../store/store';

const UserProfile = (props)=> {
	const getList = () => {
    store.dispatch({type:'SHOW_PROFILE', data: false })
  }
    return (
    	<div>
		     <section className="users_list">
		      	<p>{props.username}</p>
		      	<p>{props.bio}</p>
		      	<button onClick={()=>getList()}>Back to list</button>
		     </section>
        </div>
    );
}

export default UserProfile; 
 