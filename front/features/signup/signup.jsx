import React from 'react';
import $ from 'jquery';
import auth from '../../routes/auth';
import Modal from '../app/Modal';
import {ALL_TEAMS, showAllTeams} from '../app/appActions';
import store from '../../store/store';
import {withRouter} from 'react-router';

const Signup = React.createClass({
  getInitialState() {
    return {username:'', password:'', repassword:'', errormessage: '', bio:''};
  },
  submitLoginInfo() {  
    event.preventDefault();
    (this.state.password != this.state.repassword) ?
      this.setState({errormessage: 'Passwords does not match. Please re-enter password'})
    :
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
      .done((data)=> {
        if(data.user) {
          // send all teams to the store and take user to the next page
          store.dispatch(showAllTeams(data.allTeams, data.user))
          localStorage.userInfo = JSON.stringify(data.user)
          this.props.router.push(`/jointeam`)
        } else {
          this.props.router.replace('/')
        }
      })
      .catch((err)=>this.setState({errormessage: err.responseText}))
  },
  handleChange(eventType, event) {
    this.setState({[eventType]: event.target.value});
  },
  render() {
    return (
      <div className='signin'>
        <p className='errormsg'>{this.state.errormessage}</p>
        SIGN-UP
      <br/>
        Username:
      <br/>
        <input onChange={this.handleChange.bind(this, 'username')} value={this.state.username} type="text"/>
      <br/>
        Password:
      <br/>
        <input onChange={this.handleChange.bind(this, 'password')} value={this.state.password} type="password"/>
      <br/>
        Re-enter Password:
      <br/>
        <input onChange={this.handleChange.bind(this, 'repassword')} value={this.state.repassword} type="password"/>
      <br/>
        Enter personal bio:
      <br/>
        <textarea placeholder="Tell us about yourself here..." onChange={this.handleChange.bind(this, 'bio')}/>
      <br/>
        <button className='signinbutton' onClick={this.submitLoginInfo}>Submit</button>
      </div>
    )
  }
});

export default withRouter(Signup);
