import $ from 'jquery'
import store from '../../store/store';

//types
export const UPDATE_CHANNEL = 'UPDATE_CHANNEL'

// actions
// export const selectAction = selection => ({
//   type: UPDATE_CHANNEL, 
//   	selection
// })

// export const getAllUsers = (users) => (
//   {
//     type: GET_ALL_USERS,
//     usersList
//   }
// )

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
      messages: channelData.Messages
    })
  })
}