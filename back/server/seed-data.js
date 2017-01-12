//seed models and database
const User = require('../db/models').User;
const Message = require('../db/models').Message;
const Team = require('../db/models').Team;
const Chatroom = require('../db/models').Chatroom;
const db = require('../db/models').sequelize

//data
const users = [
  {username: 'jondubya', password: 'password123', currentTeam: 1, bio:"I have been searching for a program to learn more about programming in general and came across C4Q. I love the pay it forward structure that encourages learning first unlike most other programs I’ve come across. I applied in hopes of learning web development and by the end have an up and running retail webpage. Two fun facts are I am an amateur photographer and I’m also a recovering sneakerhead."},
  {username: 'overAchiever', password: 'password123', currentTeam: 1, bio:" I am to good for this channel."},
  {username: 'vanessavisual', password: 'password123', currentTeam: 1, bio:"Hello! I joined Access Code because I am passionate about creating. I know I’ll be learning a lot and with this knowledge I will be able to make some really cool web apps. I like to take classes in a variety of subjects including jewelry making and dance. I wanted to be a fashion designer at some point and I still love fashion."},
  {username: 'jung8027', password: 'password123', currentTeam: 1, bio:"I joined access code because I wanted a change of pace from what I was studying, which was biochemistry. I felt that I can do more with programming than through biochemistry where I will have to go through multiple years of academia in order to get to where I want to be. My hobbies right now are reading, playing video games, and hanging out with friends."},
  {username: 'samanthabretous', password: 'password123', currentTeam: 1, bio:"computer magic maker | I now start counting from 0 | Three people say I’m funny; I don’t correct them | Weird by default. I joined Access Code because I believe in my future. Access Code will push me in the right direction to become a proficient developer. I am meant to be here at this stage of my life and I couldn’t be more blessed to go forth on this journey. 1. I am extremely handy contrary to popular belief. I enjoy building with my hands, painting, and DIY’s. 2. My favorite movie is “Fifth Element”"},
  {username: 'thePresident', password: 'password123', currentTeam: 1, bio:"My journey first started as a financial banker selling insurance and annuities, but I soon realized that was not for me so I quit my job and started school at LaGuardia Community College as a computer science major. I applied to Access Code to further develop my skills as a programmer and get a real understanding for the fundamentals of what it is to become a full-fledged programmer. Two fun facts about me are one that I’ve been practicing karate since I was 8 years old, and two that I love to pass time on my motorcycle."},
  {username: 'brettSettles', password: 'password123', currentTeam: 1, bio:"Hi Friends! The reason I joined access code is to have a open platform to share my ideas and discuss issues that affect my community, where traditional outlets have been insufficient. I hope to achieve a website that discusses issues that affect those who live in poorer communities as well as developing a website that has listings of minority owned businesses to support their growth and by doing such uplifting the communities in which they are in. Two Fun Facts: I started an organization in 2011 on my campus that has grown to over 50 member. Also, I headed trips to two prison facilities in upstate NY to discuss issues that were affecting the incarcerated youth and to talk about life after prison."},
  {username: 'chanice', password: 'password123', currentTeam: 1, bio:"I joined this course to learn something I never thought I’d be able to do. Which will push me for more things in life. I hope I’m able to share with people that our minds are capable of much more and to push for nothing less than greatness. I have A twin sister. Before I look at someone I look at there feet first. (Nothing shallow its focus of habit. Worked at Footlocker for 4 years."},
  {username: 'headSlacker', password: 'password123', currentTeam: 1, bio:"Lollipops and Chicken Wings are my favorite things. Yum Yum. I should do some work ... tomorrow"},
  {username: 'ambar', password: 'password123', currentTeam: 2, bio:"I am Ambar, I wanted to join Access Code because I was inspired by their mission on helping improve the life of our community through advances on once career. by the end of the cohort I hope I will be able to emerge into the tech industry and have a career.  Fun facts: I snowboard, and l am have being trying to learn salsa dancing.. (very hard )"},
  {username: 'bethea28', password: 'password123', currentTeam: 2, bio:"I joined Access Code to further my knowledge in software development. I hope to first acquire the skill set to land a job in the tech industry then ultimately pursue my own entrepreneurial endeavors. One fun fact about me is that on some nights when I fall asleep alone, I wake up with a 60lb pitbull snoring on my chest. Another fun fact is that I am originally from North Carolina and I moved to NYC to pursue music."},
  {username: 'carmar', password: 'password123', currentTeam: 2, bio:"My name is Carlos Martinez. I live in Bed-Stuy Brooklyn. I joined Access Code because I believe it is an amazing opportunity to get into the tech world. My goal is to obtain a job with a tech company. Whether is is for a small start-up or a large tech company. I tend to read a lot of non-fiction books as I think it is a great way to learn information and lessons from different people. I also love talking about the Universe! You like Carl Sagan? Let’s chat it up."},
  {username: 'kaladin9017', password: 'password123', currentTeam: 2, bio:"I joined Access Code because I see the power of programming in all of my favorite things(computers, games, sports/data analytics) and I want to be able to understand and be apart of the teams that create them. Playing bass guitar is my hobby and I lived in England until I was 10"},
  {username: 'craig01', password: 'password123', currentTeam: 2, bio:"Hello my name is Craig Dejean, I joined access code to help further my skills in programming so I can create software and be in a community where everyone loves technology. Two fun facts would be that I am crazy about football and I love linux!"},
];
const messages = [
//TEAM SLACKERS chatroom slackers
  {msg: "FIRST!", UserId: 1, ChatroomId:1},
  {msg: "Who cares?", UserId: 2, ChatroomId:1},
  {msg: "Mind your business.", UserId: 1, ChatroomId:1},
  {msg: "Have a cookie.", UserId: 2, ChatroomId:1},
//TEAM SLACKERS chatroom food
  {msg: "I'm soooooo hungry...", UserId: 3, ChatroomId:2},
  {msg: "Starvation is the new fad diet.", UserId: 2, ChatroomId:2},
  {msg: "Are you kidding me?", UserId: 3, ChatroomId:2},
  {msg: "No but those pants looks more stressed than me during projects, just sayin.", UserId: 2, ChatroomId:2},
//TEAM SLACKERS chatroom random
  {msg: "Anyone see the new iPhone 7?", UserId: 6, ChatroomId:3},
  {msg: "No but I heard it's lit", UserId: 9, ChatroomId:3},
  {msg: "No I'm asking has anyone seen it? I just lost mine", UserId: 6, ChatroomId:3},
  {msg: "Nope but I can sell you one", UserId: 7, ChatroomId:3},
  {msg: "LoL real funny, can I get it back?", UserId: 6, ChatroomId:3},
  {msg: "Only if you hit Kyu 4 on CodeWars", UserId: 7, ChatroomId:3},
  {msg: "We'd have iPhone 70 by then", UserId: 2, ChatroomId:3},
  {msg: "OMG", UserId: 6, ChatroomId:3},
//TEAM SLACKERS chatroom HW 17
  {msg: "Lost on how to create a for loop", UserId: 4, ChatroomId:4},
  {msg: "Do a barrell roll", UserId:5, ChatroomId:4},
  {msg: "HALP FOR REAL", UserId: 4, ChatroomId:4},
  {msg: "Sure...But there will be a time when I ask you for a favor", UserId: 5, ChatroomId:4},
  {msg: "LoL ok godfather", UserId: 4, ChatroomId:4},
  {msg: "Call me flexmaster flex", UserId: 5, ChatroomId:4},
  {msg: "...No", UserId: 2, ChatroomId:4},

//TEAM SLACKERS chatroom Random
  {msg: "lsdmapojipom;la", UserId: 8, ChatroomId:5},
  {msg: "Go home it's late", UserId: 4, ChatroomId:5},
  {msg: "I'm bored entertain me", UserId:8, ChatroomId:5},
  {msg: "Reddit is life", UserId: 4, ChatroomId:5},
  {msg: "Sure...But reddit isn't a life, it's a lack-of life", UserId: 2, ChatroomId:5},
  {msg: "Don't judge me", UserId: 4, ChatroomId:5},
  {msg: "I'm not but it really isn't", UserId: 2, ChatroomId:5},
  {msg: "I think I'm hooked...", UserId: 8, ChatroomId:5},
  {msg: "Oh god", UserId: 2, ChatroomId:5},
//TEAM Dreamers chatroom Dreamers
  {msg: "FIRST!", UserId: 10, ChatroomId:6},
  {msg: "Who cares?", UserId: 11, ChatroomId:6},
  {msg: "Mind your business.", UserId: 10, ChatroomId:6},
  {msg: "Have a brownie.", UserId: 11, ChatroomId:6},
//TEAM TWO chatroom iOS RULES
  {msg: "What's beyond the API request?", UserId: 2, ChatroomId:7},
  {msg: "That's restricted territory", UserId: 13, ChatroomId:7},
  {msg: "But I must know!", UserId: 2, ChatroomId:7},
  {msg: "Don't even bother", UserId: 13, ChatroomId:7},
//TEAM TWO chatroom random
  {msg: "Anyone see the iPhone 3G?", UserId: 14, ChatroomId:8},
  {msg: "No but I heard it was lit", UserId: 11, ChatroomId:8},
  {msg: "No I'm asking cause I'm trying to lose mine", UserId: 14, ChatroomId:8},
  {msg: "Nope people wouldn't even pick that up on the streets", UserId: 11, ChatroomId:8},
  {msg: "LoL real funny, can you just trash it?", UserId: 14, ChatroomId:8},
  {msg: "Only if you hit Kyu 4 on my CodeWars", UserId: 11, ChatroomId:8},
  {msg: "You're going to die with it", UserId: 13, ChatroomId:8},
  {msg: "OMG", UserId: 14, ChatroomId:8},
//TEAM TWO chatroom HW
  {msg: "Not doing hw", UserId: 2, ChatroomId:9},
  {msg: "Trying to get kicked out?", UserId:13, ChatroomId:9},
  {msg: "I can't cause my arm broke", UserId: 2, ChatroomId:9},
  {msg: "I'll bet if I tossed a football at your you'd have no problem catching", UserId: 14, ChatroomId:9},
  {msg: "LoL shhhh", UserId: 2, ChatroomId:9},
];
const teams = [  
  {name: 'Dreamers'},
  {name: 'Slackers'},
];

const chatrooms = [
  {name: 'Slackers'},
  {name: 'Food'},
  {name: 'Resources'},
  {name: 'slackers'},
  {name: 'Random'},
  {name: 'Dreamers'},
  {name: 'iOS-Rules'},
  {name: 'Random'},
  {name: 'Homework'},
];

db.sync({force: true})
.then(() => Team.bulkCreate(teams))
.then(() => User.bulkCreate(users))
.then(() => Chatroom.bulkCreate(chatrooms))
.then(() => Message.bulkCreate(messages))
.then(() => Team.findById(1))
.then(team => {
  team.addChatrooms([1,2,3,4,5])
  team.addUsers([1,2,3,4,5,6,7,8,9])
})
.then(() => Team.findById(2))
.then(team => {
  team.addChatrooms([6,7,8,9])
  team.addUsers([2,10,11,12,13,14])
})
.then(() => Chatroom.findById(1))
.then(chatroom => {
  chatroom.addUsers([1,2,3,4,5,6,7,8,9])
  chatroom.addMessages([1,2,3,4])
})
.then(() => Chatroom.findById(2))
.then(chatroom => {
  chatroom.addUsers([2,3])
  chatroom.addMessages([5,6,7,8])
})
.then(() => Chatroom.findById(3))
.then(chatroom => {
  chatroom.addUsers([2,6,7,9])
  chatroom.addMessages([9,10,11,12,13,14,15,16])
})
.then(() => Chatroom.findById(4))
.then(chatroom => {
  chatroom.addUsers([2,4,5])
  chatroom.addMessages([17,18,19,20,21,22])
})
.then(() => Chatroom.findById(5))
.then(chatroom => {
  chatroom.addUsers([2,4,8])
  chatroom.addMessages([23,24,25,26,27,28,29,30,31])
})
.then(() => Chatroom.findById(6))
.then(chatroom => {
  chatroom.addUsers([2,10,11,12,13,14])
  chatroom.addMessages([32,33,34,35])
})
.then(() => Chatroom.findById(7))
.then(chatroom => {
  chatroom.addUsers([2,13])
  chatroom.addMessages([36,37,38,39])
})
.then(() => Chatroom.findById(8))
.then(chatroom => {
  chatroom.addUsers([11,13,14])
  chatroom.addMessages([40,41,42,43,44,45,46,47])
})
.then(() => Chatroom.findById(9))
.then(chatroom => {
  chatroom.addUsers([2,13,14])
  chatroom.addMessages([49,50,51,52])
})



module.exports = {
  users,
  messages, 
  teams,
  chatrooms
}




