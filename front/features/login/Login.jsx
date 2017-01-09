import React from 'react';
import $ from 'jquery';
import auth from '../../routes/auth'
import {socket} from '../../socket'

const Login = React.createClass({
  getInitialState() {
    return {username: '', password: ''};
  },
  submitLoginInfo() {  
    event.preventDefault();
    //Jung make the ajax request in file routes/auth in the pretend request you can find more infomation on about react router auth here => https://github.com/ReactTraining/react-router/tree/master/examples/auth-flow
    auth.login(this.state.username, this.state.password, (loggedIn) => {
      console.log(loggedIn);
      if (loggedIn){
        this.props.router.push("/C4Q3.1/C4Q3.1")
        socket.emit("join-rooms", ["test", "test2"])
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
        <input onChange={this.handleChange.bind(this, 'username')} type="text"/>
        Password:
        <input onChange={this.handleChange.bind(this, 'password')} type="password"/>
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
