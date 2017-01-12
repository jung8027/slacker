const router = require("express").Router();
const Team = require('../../db/models').Team;
const Chatroom = require('../../db/models').Chatroom;
const User = require('../../db/models').User;
const debug = require('debug')('SERVER_INDEX');

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

const getTeamInfoBasedOnUser = (req, res) => {
	User.update(
		{ currentTeam: req.params.teamId},
		{ where: {id: req.params.userId }}
	)
	.then(user => {
		debug(req.params.teamId, req.params.userId)
		return User.findById(req.params.userId, {
			attributes: ['id', 'username', 'password', 'currentTeam'],
			include: [
				{
					model: Chatroom,
					where: {
						TeamId: req.params.teamId
					},
					attributes: ['id', 'name'],
					through: {
						attributes: []
					}
				},
				// {
				// 	model: Team,
				// 	where: {
				// 		id: req.params.teamId
				// 	},
				// 	attributes: ['name', 'id'],
				// 	through: {
				// 		attributes: []
				// 	}
				// }
			]
		})
	})
	.then(userInfo => {
		debug(userInfo)
		res.send(userInfo)
	})
	.catch(err => res.send(err))
}

//api/team
router.route('/')
	.post(createTeam)
	.get(getAllTeams)

router.route('/:teamId/:userId')
	.get(getTeamInfoBasedOnUser)

router.route('/:name')
	.get(getSingleTeam)
	.delete(killTeam)

module.exports = router;
