import React from 'react';
import $ from 'jQuery';

const Login = React.createClass({
  getInitialState() {
    return {username: '', password: ''};
  },
  submitLoginInfo() {
    $.ajax({
      method: 'POST',
      url: '/api/login',
      data: this.state
    })
    .done((data) => {
      console.log('received user data', data);
    })
  },
  handleChange(eventType, event) {
    this.setState({[eventType]: event.target.value});
  },
  render() {
    return (
      <div>
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
