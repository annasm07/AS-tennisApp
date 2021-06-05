import {combineReducers} from 'redux';
import user from './userReducer';
import player from './playerReducer';
import tokens from './tokenReducer';

const rootReducer = combineReducers({
  user,
  player,
  tokens,
});

export default rootReducer;
