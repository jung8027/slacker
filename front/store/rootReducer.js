import {combineReducers} from 'redux';
import app from '../features/app/appReducer';
import chatBar from '../features/chatBar/chatBarReducer';
import User from '../features/user/userReducer';
import Users from '../features/users/usersReducer';

export const rootReducer = combineReducers({
  app,
  chatBar,
  User,
  Users
});