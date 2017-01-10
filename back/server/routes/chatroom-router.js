const router = require("express").Router();
const Chatroom = require('../../db/models').Chatroom;
const User = require('../../db/models').User;
const Team = require('../../db/models').Team;
const Message = require('../../db/models').Message;

//gets all chatrooms
const getAllChats = (req,res) => (
	Chatroom.findAll()
	.then((chatrooms)=>
		res.send(chatrooms))
);

//creates chat then adds in teamid needs to be pulled from store
const createChat = (req,res) => {
	Chatroom.findOrCreate(
		{where:
			{name: req.body.name,
			TeamId: req.body.teamid}})
	.then((data)=>
		res.send(data))
};

//gets chatrooms that belong to team
const getTeamChatrooms = (req,res)=>{
	Team.findOne({
		where: {name:req.params.teamname},
			include: 
				[{model: Chatroom, 
      			include: [Message],
        		attributes: {exclude: ['password']}}]
	}).then((data)=>res.send(data))
};

// should populate user list of selected chatroom and their messages
const getSingleChat = (req,res)=>{
	Chatroom.findById(req.params.chatId, {
    include: [
      {
        model: User,
        attributes: ['username', 'id'],

        //remove infomation about the jointable
        through: {
          where: {
            ChatroomId: 1
          },
        attributes: [{exclude: ["User_Chat"]}]

        }
      },
      {
        model: Message,
        include: [{model: User}],
        limit: 10,
        order: [['createdAt', 'DESC']],
        joinTableAttributes: []
      }
    ]
	}).then((data)=>res.send(data))
};

//if user is last one to exit chatroom this destroys chat
// const deleteChatroom=(req,res)=>{
// 	Chatroom.findOne({
// 		where: {name: req.params.chatname},
// 			include:
// 				[{model:User}]
// 	}).then((data)=>{(data.Users.length=1)?})res.send((data)))
// };

//get all routes for testing purposes
// router.route('/')
// 	.get(getAllChats)


//api/chatroom/
router.route('/:teamname')
	.get(getTeamChatrooms)
	.post(createChat)

router.route('/:teamId/:chatId')
	.get(getSingleChat)
	// .get(deleteChatroom)


module.exports = router;

