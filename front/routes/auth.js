import $ from 'jquery';
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

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
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
      store.dispatch({
        type: 'AUTH_USER',
        userName: userInfo.username,
        userChatrooms: userInfo.Chatrooms,
        userTeams: userInfo.Teams,
      })
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    })
    .catch(()=> cb({ authenticated: false }))
  }, 0)
}

