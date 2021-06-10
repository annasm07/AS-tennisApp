import {combineReducers} from 'redux';
import user from './userReducer';
import player from './playerReducer';
import players from './playersReducer';
import tokens from './tokenReducer';
import currentMatch from './currentMatchReducer';
import currentGamePoints from './pointsReducer';

const rootReducer = combineReducers({
  user,
  player,
  players,
  tokens,
  currentMatch,
  currentGamePoints,
});

export default rootReducer;
