const router = require("express").Router();
const User = require('../../db/models').User;
const Message = require('../../db/models').Message;
const Chatroom = require('../../db/models').Chatroom;
const Team = require('../../db/models').Team;
const debug = require('debug')('SERVER_INDEX');

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
  debug(req.body)
	const { username, password, bio} = req.body;
  let user = null;
	User.create({
		username,
		password,
		bio
	})
	.then((newUser)=> {
    user = newUser
    return Team.findAll()
  })
  .then((allTeams) => {
    res.send({user, allTeams})
  })
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
	.post(createUser)  //

router.route('/:username')
	.get(getOneUser)
	.delete(deleteUser)

router.route('/userprofile/:userid')
	.get(getProfile)


module.exports = router;