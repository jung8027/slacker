import $ from 'jquery';
import _ from 'lodash';
import store from '../store/store.js';
import {socket} from '../socket'

module.exports = {
  login(username, password, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(username, password, (res) => {
      console.log(res)
      if (res.authenticated) {
        localStorage.token = res.token
        localStorage.userInfo = res.userInfo
        if (cb) cb(true, res.teamName)
        this.onChange(true, res.teamName)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  loggedIn() {
    return !!localStorage.token
  },

  logout() {
    delete localStorage.token
    delete localStorage.userInfo
  },

  onChange() {},

}
const initialInfo = (userInfo) => {


}
const pretendRequest = (username, password, cb) => {
  setTimeout(() => {
    $.ajax({
      url: '/api/login',
      type: 'POST',
      data: 
        {
          username: username,
          password: password
        }
    })
    .done((userInfo)=>{

      //join socket to chat rooms based off the infomation we receive in the database
      socket.emit('join-rooms', _.map(userInfo.userChatrooms, room => (room.name)))

      //find the current team the user is on and and get the name of that team so we can use it in the url 
      const teamObj = _.find(userInfo.teams, team => team.id === userInfo.user.currentTeam)

      //create token for user authentication for other react-router routes
      cb({
        authenticated: true,
        teamName: teamObj.name, 
        token: Math.random().toString(36).substring(7),
        userInfo: JSON.stringify(userInfo)
      })
    })
    .catch(()=> cb({ authenticated: false }))
  }, 0)
}

