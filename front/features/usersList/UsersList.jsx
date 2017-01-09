
//Vanessa
//all users(usernames) will be called from the database and displayed in a list
//convert this to redux

import React from 'react';
import UserProfile from '../userProfile/UserProfile';

const UsersList = (props) => {
  console.log(props)
  return (
    <div>
      {
        props.users ? props.users.map((user, index) =>(
          <UserProfile key={index} user={user} />
        )): null
      }
    </div>
  )
}

export default UsersList;