import React from 'react';
import $ from 'jquery';
import auth from '../../routes/auth'
import {socket} from '../../socket'

const Signup = React.createClass({
  getInitialState() {
    return {username:'', password:'', repassword:'', errormessage: '', bio:''};
  },
  submitLoginInfo() {  
    event.preventDefault();
    (this.state.password != this.state.repassword) ?
      this.setState({errormessage: 'Passwords does not match. Please re-enter password'})
    :
    {
      $.ajax({
        url: '/api/user',
        dataType: 'json',
        type: 'POST',
        data: {
          username: this.state.username,
          password: this.state.password,
          bio: this.state.bio
        }
      })
      .then(()=> {auth.login(this.state.username, this.state.password, (loggedIn, teamName) => {
      console.log('loggedin?', teamName);
      
      (loggedIn) ? this.props.router.push(`/${teamName}/${teamName}`)
      : this.props.router.replace('/')
      
      })})
    }
  },
  handleChange(eventType, event) {
    this.setState({[eventType]: event.target.value});
  },
  render() {
    return (
      <div>
      SIGN-UP
      <br/>
        Username:
        <input onChange={this.handleChange.bind(this, 'username')} value={this.state.username} type="text"/>
      <br/>
        <p>{this.state.errormessage}</p>
        Password:
        <input onChange={this.handleChange.bind(this, 'password')} value={this.state.password} type="password"/>
        Re-enter Password:
        <input onChange={this.handleChange.bind(this, 'repassword')} value={this.state.password} type="password"/>
      <br/>
        Enter personal bio:
        <textarea placeholder="Tell us about yourself here..." onChange={this.handleChange.bind(this, 'bio')}/>
        <button onClick={this.submitLoginInfo}>Submit</button>
      </div>
    )
  }
});

export default Signup;
