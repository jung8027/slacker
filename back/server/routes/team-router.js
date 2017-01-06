const router = require("express").Router();
const Team = require('../../db/models').Team;

//new chat room
const createTeam = (req,res) => {
	Team.create({
		name: req.body.name
	})
	.then(()=>
		res.send('Team ' + req.body.name + ' created!'))
};

//displays all chats on sidebar of active Chatrooms to user
const getAllTeams = (req,res) => (
	Team.findAll()
	.then((Chatrooms)=>
		res.send(Chatrooms))
);


//used for when user enters a room already created to join convo
const getSingleTeam = (req,res) => (
	Team.findOne({
		where: {name: req.params.name}
	})
	.then((chat)=>
		res.send(chat))
);


const killTeam = (req,res)=> (
	Team.destroy({
		where: {name: req.params.name}
// 		include: [{
// 			model: User,
// //			as: tbd,
// 			where: {}
// 		}]
	})
	.then((chat)=>
		res.send('Team '+chatId+' deleted!'))
);

router.route('/')
	.post(createTeam)
	.get(getAllTeams)

router.route('/:name')
	.get(getSingleTeam)
	.delete(killTeam)

module.exports = router;
