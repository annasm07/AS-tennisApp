import {combineReducers} from 'redux';
import user from './userReducer';
import player from './playerReducer';
import players from './playersReducer';
import tokens from './tokenReducer';

const rootReducer = combineReducers({
  user,
  player,
  players,
  tokens,
});

export default rootReducer;
