import actionTypes from '../actions/actionTypes';
import {counterLogicScoring} from '../../utils/counterLogic';

function currentGamePointsReducer(games = [{p1: 0, p2: 0}], action) {
  switch (action.type) {
    case actionTypes.UPDATE_GAMES:
      const updatedGames = counterLogicScoring(action.playerWhoWon, games);
      return updatedGames;
    case actionTypes.UPDATE_SETS:
      return [{p1: 0, p2: 0}];
    default:
      return games;
  }
}

export default currentGamePointsReducer;
