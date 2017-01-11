//seed models and database
const User = require('../db/models').User;
const Message = require('../db/models').Message;
const Team = require('../db/models').Team;
const Chatroom = require('../db/models').Chatroom;
const db = require('../db/models').sequelize

//data
const users = [
  {username: 'test1', password: 'pass1', currentTeam: 1, bio:"happy dev"},
  {username: 'test2', password: 'pass2', currentTeam: 1, bio: 'human'},
  {username: 'test3', password: 'pass3', currentTeam: 1, bio: 'life is ...'},
];
const message1 = [
//TEAM SLACKERS chatroom slackers
  {msg: "FIRST!", UserId: 1},
  {msg: "Who cares?", UserId: 2},
  {msg: "Mind your business.", UserId: 1},
  {msg: "Have a cookie.", UserId: 2},
//TEAM SLACKERS chatroom food
  {msg: "I'm soooooo hungry...", UserId: 3},
  {msg: "Starvation is the new fad diet.", UserId: 2},
  {msg: "Are you kidding me?", UserId: 3},
  {msg: "No but those pants looks more stressed than me during projects, just sayin.", UserId: 2}
//TEAM SLACKERS chatroom random
  {msg: "Anyone see the new iPhone 7?", UserId: 6},
  {msg: "No but I heard it's lit", UserId: 9},
  {msg: "No I'm asking has anyone seen it? I just lost mine", UserId: 6},
  {msg: "Nope but I can sell you one", UserId: 7},
  {msg: "LoL real funny, can I get it back?", UserId: 6},
  {msg: "Only if you hit Kyu 4 on CodeWars", UserId: 7},
  {msg: "We'd have iPhone 70 by then", UserId: 2},
  {msg: "OMG", UserId: 6},
//TEAM SLACKERS chatroom HW
  {msg: "Lost on how to create a for loop", UserId: 4},
  {msg: "Do a barrell roll", UserId:5},
  {msg: "HALP FOR REAL", UserId: 4},
  {msg: "Sure...But there will be a time when I ask you for a favor", UserId: 5},
  {msg: "LoL ok godfather", UserId: 4},
  {msg: "Call me flexmaster flex", UserId: 5},
  {msg: "...No", UserId: 2},

//TEAM SLACKERS chatroom Random
  {msg: "lsdmapojipom;la", UserId: 8},
  {msg: "Go home it's late", UserId: 4},
  {msg: "I'm bored entertain me", UserId:8},
  {msg: "Reddit is life", UserId: 4},
  {msg: "Sure...But reddit isn't a life, it's a lack-of life", UserId: 2},
  {msg: "Don't judge me", UserId: 4},
  {msg: "I'm not but it really isn't", UserId: 2},
  {msg: "I think I'm hooked...", UserId: 8},
  {msg: "Oh god", UserId: 2},
];

const message2 = [
//TEAM TWO chatroom TWO
  {msg: "FIRST!", UserId: 10},
  {msg: "Who cares?", UserId: 11},
  {msg: "Mind your business.", UserId: 10},
  {msg: "Have a brownie.", UserId: 11},
//TEAM TWO chatroom iOS RULES
  {msg: "What's beyond the API request?", UserId: 12},
  {msg: "That's restricted territory", UserId: 13},
  {msg: "But I must know!", UserId: 12},
  {msg: "Don't even bother", UserId: 13}
//TEAM TWO chatroom random
  {msg: "Anyone see the iPhone 3G?", UserId: 14},
  {msg: "No but I heard it was lit", UserId: 11},
  {msg: "No I'm asking cause I'm trying to lose mine", UserId: 14},
  {msg: "Nope people wouldn't even pick that up on the streets", UserId: 11},
  {msg: "LoL real funny, can you just trash it?", UserId: 14},
  {msg: "Only if you hit Kyu 4 on my CodeWars", UserId: 11},
  {msg: "You're going to die with it", UserId: 13},
  {msg: "OMG", UserId: 14},
//TEAM TWO chatroom HW
  {msg: "Not doing hw", UserId: 12},
  {msg: "Trying to get kicked out?", UserId:13},
  {msg: "I can't cause my arm broke", UserId: 12},
  {msg: "I'll bet if I tossed a football at your you'd have no problem catching", UserId: 14},
  {msg: "LoL shhhh", UserId: 12},
];
const teams = [
  {name: 'C4Q3.1'},
  {name: 'C4Q3.2'},
  {name: 'C4Q3.3'},  
];

const chatroom1 = [
  {name: 'Slackers'},
  {name: 'Food'},
  {name: 'Resources'},
  {name: 'slackers'},
  {name: 'Random'},
];

const chatroom2 = [
  {name: 'Two'},
  {name: 'iOS-Rules'},
  {name: 'Random'},
  {name: 'Homework'},
];



// Team.sync({force: true})
// .then(() => Chatroom.sync({force: true}))

// User.sync({force: true})
// Message.sync({force: true})
db.sync({force: true})
.then(() => Team.bulkCreate(teams))
.then(() => User.bulkCreate(users))
.then(() => Chatroom.bulkCreate(chatrooms))
.then(() => Message.bulkCreate(messages))
.then(() => Team.findById(1))
.then(team => {
  team.addChatrooms([1,2,3,4,5,6])
  team.addUsers([1,2,3])
})
.then(() => Chatroom.findById(1))
.then(chatroom => {
  chatroom.addUsers([1,2,3])
  chatroom.addMessages([1,2,3,4,5])
})
.then(() => Chatroom.findById(2))
.then(chatroom => {
  chatroom.addUsers([2,3])
  chatroom.addMessages([6,7,8])
})
.then(() => Chatroom.findById(3))
.then(chatroom => {
  chatroom.addUsers([1])
})
.then(()=> {
  return Team.findById(2)
})
.then(team => team.addUsers([1]))
.then(()=> {
  return Team.findById(3)
})
.then(team => team.addUsers([1]))


module.exports = {
  users,
  messages, 
  teams,
  chatrooms
}




