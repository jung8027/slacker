import {combineReducers} from 'redux';
import channel from '../features/channel/channelReducer';
import chatBar from '../features/chatBar/chatBarReducer';
import joinTeam from '../features/joinTeam/joinTeamReducer';
import login from '../features/login/loginReducer';
import user from '../features/user/userReducer';
import users from '../features/users/usersReducer';

export const rootReducer = combineReducers({
  channel,
  chatBar,
  joinTeam,
  login,
  user,
  users
});