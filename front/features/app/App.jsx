import React from 'react';
import {Link} from 'react-router';
import store from '../../store/store';
import {socket} from '../../socket'
import NavBar from './NavBar';
import Modal from './Modal'


const App = React.createClass({
  componentDidMount(){
    if(localStorage.userInfo){
      let userInfo = JSON.parse(localStorage.userInfo)

      //send infomation about the user to the store everytime a refresh takes place
      this.props.updateUserInfo(userInfo.user, userInfo.teams,userInfo.chatrooms)
      
      //join socket to chat rooms based off the infomation we receive in the database
      socket.emit('join-rooms', _.map(userInfo.chatrooms, room => (room.name)))
    }
  },
  componentWillReceiveProps(nextProps) {
    //this is for modal display
    // if we changed routes...
    console.log("nextProps",nextProps.location.key)
    console.log(this.props.location.key)
    if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      // save the old children (just like animation)
    console.log("previousChildren", this.previousChildren)
    console.log("props", this.props)
      const {channel, usersList, teamList, chat} = this.props
      this.previousChildren = [channel, usersList,teamList, chat]
    }
  },
  render() {
    const {channel, usersList, chat, teamList, location, joinTeam, userProfile, showProfile} = this.props
    const isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )
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
        <div>
          {isModal && (
            <Modal isOpen={true} returnTo={location.state.returnTo}>
              {joinTeam}
            </Modal>
          )}
        </div>
      </div>
    )
  }
});

export default App;
