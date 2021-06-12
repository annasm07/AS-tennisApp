import actionTypes from '../actions/actionTypes';

function currentMatchReducer(currentMatch = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_MATCH:
      return action.currentMatch;
    case actionTypes.CREATE_MATCH_ERROR:
      return currentMatch;
    case actionTypes.UPDATE_MATCH_GAMES:
      const gamesP1 = action.games[action.games.length - 1].p1;
      const gamesP2 = action.games[action.games.length - 1].p2;
      const updatedMatchGames = currentMatch;
      updatedMatchGames.result[0].games[currentMatch.flow.sets.length || 0] =
        gamesP1;
      updatedMatchGames.result[1].games[currentMatch.flow.sets.length || 0] =
        gamesP2;
      updatedMatchGames.flow.points.push(action.points);
      return updatedMatchGames;
    case actionTypes.UPDATE_MATCH_SETS:
      const updatedMatchSets = currentMatch;
      updatedMatchSets.flow.games.push(action.games);
      updatedMatchSets.flow.sets.push(action.sets);

      updatedMatchSets.flow.points.push(action.points);
      return updatedMatchSets;
    // case actionTypes.UPDATE_MATCH:
    //   return action.currentMatch;
    default:
      return currentMatch;
  }
}

export default currentMatchReducer;
