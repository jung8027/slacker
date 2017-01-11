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
  {msg: "This is the first message", UserId: 1},
  {msg: "This is the second message from username: test1", UserId: 1},
  {msg: "Test user number 1 is rolling out with messages", UserId: 1},
  {msg: "Message Message Message number 4 from username test2", UserId: 2},
  {msg: "Come on test1. Stop sending out so many messages.", UserId: 3},
  {msg: "New message over here.", UserId: 3},
  {msg: "I can make a better message then username test2.", UserId: 3},
  {msg: "What ever username test3", UserId: 2}
];
const teams = [
  {name: 'C4Q3.1'},
  {name: 'C4Q3.2'},
  {name: 'C4Q3.3'},  
];

const chatrooms = [
  {name: 'C4Q3.1'},
  {name: 'C4Q3.2'},
  {name: 'C4Q3.3'},
  {name: 'slackers'},
  {name: 'nate'},
  {name: 'resources'},
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




