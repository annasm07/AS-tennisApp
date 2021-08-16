import {combineReducers} from 'redux';
import user from './userReducer';
import player from './playerReducer';
import players from './playersReducer';
import tokens from './tokenReducer';
import currentMatch from './currentMatchReducer';
import currentGamePoints from './pointsReducer';
import currentSetGames from './gamesReducer';
import currentMatchSets from './setsReducer';
import selectedStats from './selectedStats';
import server from './serverReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  user,
  error,
  player,
  players,
  tokens,
  currentMatch,
  currentGamePoints,
  currentSetGames,
  currentMatchSets,
  selectedStats,
  server,
});

export default rootReducer;
