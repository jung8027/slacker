//Vanessa
//one user should be displayed when the username from the users list is clicked
//profile?

import React from 'react';
import $ from 'jquery';

const UserProfile = React.createClass({ 
  getInitialState(){
  	return({user: null})
  },
  getUser(){
  	//var that = this
    $.ajax({
      url: "/api/users/:username",
      type: "GET",
      data: {username: that.props.users.username},
      success: function(data) {
        console.log(data)
      }
    })
  },
  render() {
    return (
      <div>
        <button onClick={this.getUser}>Click me</button>
      </div>
    )
  }
});

export default UserProfile;