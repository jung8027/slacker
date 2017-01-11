import React from 'react';
import $ from 'jquery';
import auth from '../../routes/auth'
import {socket} from '../../socket'

const Login = React.createClass({
  getInitialState() {
    return {username: 'test1', password: 'pass1'};
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
      <div>
      LOG-IN
      <br/>
        Username:
        <input onChange={this.handleChange.bind(this, 'username')} value={this.state.username} type="text"/>
        Password:
        <input onChange={this.handleChange.bind(this, 'password')} value={this.state.password} type="password"/>
        <button onClick={this.submitLoginInfo}>Submit</button>
      </div>
    )
  }
});

// Redux version
// const Login = props => {
//   const {input, inputAction} = props;
//   const handleChange = (event) => {
//     inputAction(event.target.value)
//   };

//   const submitLoginInfo = () => {
//    filler ajax - need to send to a login route api
//     $.ajax({  })
//   };

//   return (
//      <div>
//        Username:
//        <input onChange={handleChange.bind()} type="text"/>
//        Password:
//        <input onChange={handleChange} type="text"/>
//        <button onClick={submitLoginInfo}>Submit</button>
//      </div>
//   )

// }



export default Login;
