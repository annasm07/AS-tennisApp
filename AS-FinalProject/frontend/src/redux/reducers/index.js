import {combineReducers} from 'redux';
import player from './playerReducer';
import tokens from './tokenReducer';

const rootReducer = combineReducers({
  player,
  tokens,
});

export default rootReducer;
