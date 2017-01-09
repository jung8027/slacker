import {combineReducers} from 'redux';
import channel from '../features/channel/channelReducer';
import chatView from '../features/chatView/chatViewReducer';
import joinTeam from '../features/joinTeam/joinTeamReducer';
import login from '../features/login/loginReducer';
import user from '../features/user/userReducer';
import users from '../features/users/usersReducer';

export const rootReducer = combineReducers({
  channel,
  chatView,
  joinTeam,
  login,
  user,
  users
});