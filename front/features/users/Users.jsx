
//Vanessa
//all users(usernames) will be called from the database and displayed in a list
//convert this to redux

import React from 'react'
import User from './User'

const Users = (props) => {
  console.log(props)
  return (
    <div>
      {
        props.users ? props.users.map((user, index) =>(
          <User key={index} user={user} />
        )): null
      }
    </div>
  )
}

export default Users