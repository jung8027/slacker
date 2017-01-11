
//Vanessa
//all users(usernames) will be called from the database and displayed in a list
//convert this to redux

import React from 'react';
import $ from 'jquery';
import UserProfile from '../userProfile/UserProfile';

const UsersList = React.createClass({ 
  getInitialState(){
   return({usersList: []})
  },
  componentWillMount(){
    this.loadUsers();
  },
  loadUsers(){
   console.log('loading users list')
    $.ajax({
      url: "/api/users",
      type: "GET",
      //data: {username: that.props.users.username},
      success: function(data) {
        console.log(data)
        this.setState({userList: data.results}).bind(this)
      }
    })
  },
  render(){
  return (
      <div>
      <h1>usersList</h1>


        {this.props.children
          // props.users ? props.users.map((user, index) =>(
          //   <UserProfile key={index} user={user} />
          //)): null
          //
          // props.usersList ? props.usersList.map((usersList, index) =>(
          //   <UserProfile key={index} user={userList} />
          // )): null
        }
        
      </div>
    )
  }
})

export default UsersList;