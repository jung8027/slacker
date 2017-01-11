
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
   var that = this
    $.ajax({
      url: "/api/users",
      type: "GET",
      //data: {username: that.props.users.username},
      success: function(data) {
        //console.log(data)
        that.setState({userList: JSON.parse(data)})
      }
    })
  },
  render(){
  if(this.state.usersList) {
      return(
        <div>
          {this.state.usersList.map(function(usersList, idx){
            return (<UserProfile key={idx} usersList={usersList}/>)
          })}
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
})

export default UsersList;