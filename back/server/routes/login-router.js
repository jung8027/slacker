const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy
const User = require('../../db/models').User;
const Message = require('../../db/models').Message;
const Chatroom = require('../../db/models').Chatroom;
const Team = require('../../db/models').Team;

//FUNCTION//

const createSession = (req, res) => {
	User.findOne({
      where: {
        username: req.body.username
      },
      include: [
				{model: Message}, {model: Team, include: [ {model: Chatroom} ]}, {model: Chatroom}
			]
   })
  .then((user) => {
    //IF user exists, check if password is correct
    if(user && user.password === req.body.password) {
      console.log('Password is correct!')
      return user;
    //ELSE IF user does not exist, create new user
    } else if(!user) {
      console.log('User does not exist!');
    } else {
      return null;
    }
  })
  .then((user) => {
    if(user) {
      console.log('user found', user)
      res.send(user);
    } else {
      console.log('Incorrect password or username!')
      return null
    }
  })
};

const authenticate = (req,res)=>{
  if(req.session.user) {
    console.log('check session', req.session)
    res.send(req.session.user);
  } else {
    res.send(null);
  }
};

const destroySession = (req,res) => {
  if(req.session.user){
    req.session.destroy()
    console.log('logged out')
  }
}

//ROUTES//
router.route('/')
	.post(createSession)
	.get(authenticate)
	.delete(destroySession)

module.exports = router;