
module.exports = ((app,io)=>{ 
  const _ = require('lodash'),
        Chatroom = require('../../../db/models').Chatroom,
        Message = require('../../../db/models').Message,
        User = require('../../../db/models').User,
        debug = require('debug')('SOCKET');

  io.on('connection', socket => {
    socket.on('connection-name',function(user){
      io.sockets.emit('new user', user.name + " has joined.");
    }); 

    socket.on('join-rooms', userChannels => {
      _.map(userChannels, channel => {
        socket.join(channel);
      });
      const rooms = Object.keys(io.sockets.adapter.sids[socket.id]);
      debug(rooms)
      socket.emit("rooms-joined", rooms);
    })

    socket.on('message', payload => {
      const {room, msg, userId, username, chatroomId} = payload;
      Message.create({
        msg, 
        UserId: userId,
        ChatroomId: chatroomId
      })
      .then(message => {
        return Message.findById(message.id,{
          include: [
            {
              model: User,
              attributes: ['username']
            },
            {
              model: Chatroom,
              attributes: ['name']
            }
          ]
        })
      })
      .then(message => {
        io.to(room).emit('received-message', message)
      })

    })

    socket.on('disconnect', function(){
      socket.leave();
    });
  });

})