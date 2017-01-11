import React from 'react';
import auth from '../../routes/auth';
import {Link} from 'react-router';
import store from '../../store/store'
import NavBar from './NavBar'

const App = React.createClass({
  componentDidMount(){
    if(localStorage.userInfo){
      let userInfo = JSON.parse(localStorage.userInfo)
      //send infomation about the user to the store for the app component usage
      store.dispatch({
        type: 'AUTH_USER',
        user: userInfo.user,
        userTeams: userInfo.teams,
        userChannels: userInfo.chatrooms,
      })
    }
  },
  render() {
    const {channel, usersList, chat, teamList} = this.props
    return (
      <div className="app">
        <section className="team_list">{teamList}</section>
        <section className="channel_list">{channel}</section>
        <div className="main">
          <NavBar {...this.props}/>
          <div className="main_view">
            <section className="chat_view">{chat}</section>
            <section className="users_list">{user}</section>
          </div>
        </div>
      </div>
    )
  }
});

export default App;
