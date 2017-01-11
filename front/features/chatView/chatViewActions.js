//types
export const UPDATE_CHATBAR = 'update_chatbar'
export const UPDATE_MESSAGES = 'update_messages'

//actions
export const inputAction = input => ({
  type: UPDATE_CHATBAR, 
  input
})

export const updateSocketMessages = msg => (
  {
    type: UPDATE_MESSAGES,
    msg,
  }
)