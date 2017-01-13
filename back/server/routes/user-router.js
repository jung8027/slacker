const router = require("express").Router();
const User = require('../../db/models').User;
const Message = require('../../db/models').Message;
const Chatroom = require('../../db/models').Chatroom;
const Team = require('../../db/models').Team;

//FUNCTIONS//
const getAllUsers = (req,res) => (
	User.findAll({
		include: [
		{model: Message}, {model: Team, include: [{ model: Chatroom }]}
		]
	})
)
.then((usersInfo)=>
	res.send(usersInfo)
)

const getOneUser = (req,res) => (
	User.findOne({
		where: {username: req.params.username},
		include: [
		{model: Message}, {model: Team, include: [ {model: Chatroom} ]}, {model: Chatroom}
		]
	})
)
.then((userInfo)=>
	res.send(userInfo)
)

const createUser = (req,res) => {
	var body = req.body;
	User.create({
		username: body.username,
		password: body.password,
		bio: body.bio
	})
	.then(()=>
		res.send(body.username+' created!'))
	.catch((err) =>{
            // respond with validation errors
            res.status(422).send(err.errors[0].message);
        })
  .catch((err)=> {
      // every other error
      res.status(400).send({
          message: err.message
      });
    })
}

const deleteUser = (req,res)=> (
	User.destroy({
		where: {username: req.params.username}
	})
)
.then((userInfo)=>res.send(userInfo+' deleted!'))

const updateCurrentTeam =(req,res)=> {
	let newTeam = null;
	let newChatroom = null;

	//Need to acquire teamId and store it.
  Team.findOne({
		where: {name: req.body.currentTeam}
 	})
  .then((teamInfo)=>{
  	newTeam = teamInfo;
	});

	//Need to aquire chatroomId and store it.
	Chatroom.findOne({
		where: {name: req.body.currentTeam}
	})
	.then((chatroomInfo)=>{
		newChatroom = chatroomInfo;
	});

	//New User will be taken to Join Team page, username params will be provided from upon creation
	User.findOne({
		where: {username: req.params.username}
	})
	.then((user) => {
		//Promise.all does all the promises requests at once in an array.
		Promise.all([
			user.addTeams([newTeam.dataValues.id]), 
			user.addChatrooms([newChatroom.dataValues.id]), 
			//update currentTeam column on User Table. req.body.currentTeam will be from selection of a team from Join Team page
			user.update({
				currentTeam: newTeam.dataValues.id
			})
	  ]) 
  })
  
  //get information from new created User
  User.findOne({
	  where: {
	    username: req.params.username
	  },
	  attributes: {exclude: ['createdAt', 'updatedAt']}
  })
  .then((user) => {
    return Promise.all([user.getTeams({attributes: ["name",'id'], joinTableAttributes: []}), user.getChatrooms({attributes: ["name",'id'], joinTableAttributes: []}), user])
  })
  .spread((teams, chatrooms, user) => {
    res.send({teams, chatrooms, user})
  })
}



const getProfile = (req, res) => (
	User.findOne({
		where: {id: req.params.userid},
		attributes: ['id','username','bio']
	})
).then((userInfo)=>
	res.send(userInfo)
)

//ROUTES//
router.route('/')
	.get(getAllUsers)
	.post(createUser)  //needs username, password, and bio

router.route('/:username')
	.get(getOneUser)
	.delete(deleteUser)
	.put(updateCurrentTeam)

router.route('/userprofile/:userid')
	.get(getProfile)

module.exports = router;