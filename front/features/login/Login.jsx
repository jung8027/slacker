import React from 'react';
import $ from 'jquery';
import auth from '../../routes/auth'
import {socket} from '../../socket'
import Signup from '../signup/Signup'

const Login = React.createClass({
  getInitialState() {
    return {username: 'overAchiever', password: 'password123'};
  },
  submitLoginInfo() {  
    event.preventDefault();
    auth.login(this.state.username, this.state.password, (loggedIn, teamName) => {
      console.log('loggedin?', teamName);
      if (loggedIn){
        this.props.router.push(`/${teamName}/${teamName}`)
      } else {
        this.props.router.replace('/')
      }
    })
  },
  handleChange(eventType, event) {
    this.setState({[eventType]: event.target.value});
  },
  render() {
    return (
        <div className='loginpage'>
        <div className='login' >
          LOG-IN
        <br/>
          Username:
        <br/>
          <input onChange={this.handleChange.bind(this, 'username')} value={this.state.username} type="text"/>
        <br/>
          Password:
        <br/>
          <input onChange={this.handleChange.bind(this, 'password')} value={this.state.password} type="password"/>
        <br/>
          <button className='loginbutton' onClick={this.submitLoginInfo}>Submit</button>
        </div>
        <Signup />
        </div>
    )
  }
});

export default Login;
