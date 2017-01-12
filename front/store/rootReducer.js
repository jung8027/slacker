import {combineReducers} from 'redux';
import app from '../features/app/appReducer';
import channel from '../features/channel/channelReducer';
import chatView from '../features/chatView/chatViewReducer';
import joinTeam from '../features/joinTeam/joinTeamReducer';
import login from '../features/login/loginReducer';
import userProfile from '../features/userProfile/userProfileReducer';
import userslist from '../features/usersList/usersListReducer';

export const rootReducer = combineReducers({
  app,
  channel,
  chatView,
  joinTeam,
  login,
  userProfile,
  userslist
});