import React from 'react';
import {Link} from 'react-router';
import store from '../../store/store';
import {socket} from '../../socket'
import NavBar from './NavBar';


const App = React.createClass({
  componentDidMount(){
    if(localStorage.userInfo){
      let userInfo = JSON.parse(localStorage.userInfo)

      //send infomation about the user to the store everytime a refresh takes place
      this.props.updateUserInfo(userInfo.user, userInfo.teams,userInfo.chatrooms)
      
      //join socket to chat rooms based off the infomation we receive in the database
      console.log(userInfo)
      socket.emit('join-rooms', _.map(userInfo.chatrooms, room => (room.name)))
    }

  },
  render() {
    const {channel, usersList, chat, teamList, userProfile, showProfile} = this.props
    return (
      <div className="app">
        {teamList}
        <section className="channel_list">{channel}</section>
        <div className="main">
          <NavBar {...this.props}/>
          <div className="main_view">
            {chat}
            {showProfile ? userProfile : usersList}
          </div>
        </div>
      </div>
    )
  }
});

export default App;
