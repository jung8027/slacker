import $ from 'jquery'
import store from '../../store/store';
// import getChannelInfo from '../routes/Routes'

export const REMOVE_SOCKET_MESSAGES = 'remove_socket_messages'

// actions

export const getChannel = (teamName, channelName) => {
  $.ajax({
    url: `/api/chatroom/${teamName}/${channelName}`,
    type: 'GET'
  })
  .done(channelData => {
    store.dispatch({
      type: 'CHANNEL_INFO',
      channel: {
        id: channelData.id,
        name:channelData.name
      },
      users: channelData.Users,
      messages: channelData.Messages.reverse()
    })
  })
}

export const removeSocketMessages = () => ({
  type: REMOVE_SOCKET_MESSAGES
})
