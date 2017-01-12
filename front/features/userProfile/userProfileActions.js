export const GET_PROFILE = 'GET_PROFILE';
export const SHOW_PROFILE = 'SHOW_PROFILE';

export const selectAction = selection => ({
  type: GET_PROFILE, 
  selection
})

export const selectProfile = selection => ({
  type: SHOW_PROFILE, 
  selection
}) 

