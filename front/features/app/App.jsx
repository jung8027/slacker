import React from 'react';
import auth from '../../routes/auth';
import {Link} from 'react-router';
import store from '../../store/store'

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
    const {channel, user, chat, teamList} = this.props
    return (
      <div className="app">
        <section className="team_list">{teamList}</section>
        <section className="channel_list">{channel}</section>
        <section className="chat_view">{chat}</section>
        <section className="user_list">{user}</section>
        <Link to='/'><button onClick={()=>auth.logout()}>Log Out</button></Link>

      </div>
    )
  }
});

export default App;
