
module.exports = ((app,io)=>{ 
  const _ = require('lodash'),
        Message = require('../../../db/models').Message;
        debug = require('debug')('SOCKET')

  io.on('connection', socket => {
    socket.on('connection-name',function(user){
      io.sockets.emit('new user', user.name + " has joined.");
    }); 

    socket.on('join-rooms', userChannels => {
      _.map(userChannels, channel => {
        socket.join(channel);
      });
      const rooms = Object.keys(io.sockets.adapter.sids[socket.id]);
      socket.emit("rooms-joined", rooms);
    })

    socket.on('message', payload => {
      let payload
      const {room, msg, userId, username, chatroomId} = payload;
      Message.create({
        msg, 
        UserId: userId,
        ChatroomId: chatroomId
      })
      io.to(room).emit('received-message', {msg, username})

    })

    socket.on('disconnect', function(){
    });
  });

})