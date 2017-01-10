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
      return Chatroom.findById(user.get('currentTeam'), 
        {
          include: [
            {
              //include infomation about the current user and the chatrooms that they are in 
              model: User,
              attributes: {exclude: ['password']},
              where: {
                username: user.get('username')
              },
              include: [
                {
                  //include all the chatroom name plus infomation about the users in the current Chatroom
                  model: Chatroom,
                  where: {
                    TeamId: user.get('currentTeam')
                  },
                  order: ['name'],
                  attributes: ['name', 'id'],
                  //only get infomation about the users in the current chatroom
                  include: [{
                    model: User,
                    attributes: ['username', 'id'],
                    through: {
                      where: {
                        ChatroomId: user.get('currentTeam')
                      } 
                    }
                  }]
                },
                {model: Team}
              ]
            },
            {
              model: Message,
              limit: 10,
              order: [['createdAt', 'DESC']]
            },
            {model: Team, attributes: ['name','id']}
          ]
        })
    } else {
      res.send('Incorrect password or username!');
    }
  })
  .then(channel => {
    res.send(channel)
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

