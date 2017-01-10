import $ from 'jquery';
import _ from 'lodash';
import store from '../store/store.js'

module.exports = {
  login(username, password, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(username, password, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        localStorage.userInfo = res.userInfo
        if (cb) cb(true)
        this.onChange(true)
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

  onChange() {}
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
      console.log('from auth.js route', userInfo)
      const channelMembers = _.find(userInfo.Users.Chatrooms, (channel) => {
        console.log(channel.Users)
        return channel.Users
      })
      store.dispatch({
        type: 'AUTH_USER',
        userName: userInfo.Users[0].username,
        userId: userInfo.Users.id,
        userChatrooms: userInfo.Users[0].Chatrooms,
        userTeam: userInfo.Users[0].Teams
      })
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7),
        userInfo: JSON.stringify(userInfo)
      })
    })
    .catch(()=> cb({ authenticated: false }))
  }, 0)
}

