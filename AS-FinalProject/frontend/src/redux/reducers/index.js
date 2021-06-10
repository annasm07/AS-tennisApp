import {combineReducers} from 'redux';
import user from './userReducer';
import player from './playerReducer';
import players from './playersReducer';
import tokens from './tokenReducer';
import currentMatch from './currentMatchReducer';

const rootReducer = combineReducers({
  user,
  player,
  players,
  tokens,
  currentMatch,
});

export default rootReducer;
