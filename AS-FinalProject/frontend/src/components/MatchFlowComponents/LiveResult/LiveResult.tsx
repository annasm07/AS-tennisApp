import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, StyleSheet} from 'react-native';
import matchBoxStyles from '../../../theme/matchBoxTheme';
import globalStyles from '../../../theme/globalThemes';
import {
  updateMatch,
  updateGames,
  updateSets,
  updateMatchGames,
  updateMatchSets,
} from '../../../redux/actions/actionCreators';
import {checkEndSet, checkEndMatch} from '../../../utils/checkEndSet';

export default function LiveResult({navigation}: any) {
  const currentMatch = useSelector((store: any) => store.currentMatch);
  let tokens = useSelector((store: any) => store.tokens);
  let {points} = useSelector((store: any) => store.currentGamePoints);
  let currentSetGames = useSelector((store: any) => store.currentSetGames);
  let currentMatchSets = useSelector((store: any) => store.currentMatchSets);

  const dispatch = useDispatch();

  function finishMatch() {
    const p1Sets =
      currentMatch.flow?.sets[currentMatch.flow.sets.length - 1]?.p1 || 0;
    const p2Sets =
      currentMatch.flow?.sets[currentMatch.flow.sets.length - 1]?.p2 || 0;
    (p1Sets === 2 || p2Sets === 2) && navigation.navigate('Dashboard');
  }

  function getDateString(dateString: any) {
    const dateToDisplay = new Date(dateString).toLocaleDateString();
    return dateToDisplay;
  }

  function finishSet(playerWhoWon: String) {
    dispatch(updateSets(playerWhoWon));
    dispatch(updateMatchSets(currentSetGames, currentMatchSets));
    checkEndMatch(playerWhoWon, currentSetGames) && finishMatch();
  }

  function finishGame(playerWhoWon: String) {
    dispatch(updateGames(playerWhoWon));
    dispatch(updateMatchGames(currentSetGames, points));
    checkEndSet(playerWhoWon, currentSetGames) && finishSet(playerWhoWon);
    dispatch(updateMatch(tokens[0], currentMatch));
  }

  function renderPlayerResult(PLAYER: any, OtherPLAYER: any) {
    if (points[points.length - 1][PLAYER] > 40) {
      if (
        points[points.length - 1][PLAYER] >
        points[points.length - 1][OtherPLAYER]
      ) {
        if (
          Math.abs(
            points[points.length - 1][PLAYER] -
              points[points.length - 1][OtherPLAYER],
          ) >= 2
        ) {
          finishGame(PLAYER);
          return <Text style={matchBoxStyles.playerPoint}>Game</Text>;
        } else {
          return <Text style={matchBoxStyles.playerPoint}>Ad</Text>;
        }
      } else if (
        points[points.length - 1][PLAYER] ===
        points[points.length - 1][OtherPLAYER]
      ) {
        return <Text style={matchBoxStyles.playerPoint}>40</Text>;
      } else if (
        points[points.length - 1][PLAYER] -
          points[points.length - 1][OtherPLAYER] ===
        2
      ) {
        finishGame(PLAYER);
        return <Text style={matchBoxStyles.playerPoint}>Game</Text>;
      } else {
        return <Text style={matchBoxStyles.playerPoint}>40</Text>;
      }
    } else {
      return (
        <Text style={matchBoxStyles.playerPoint}>
          {points[points.length - 1][PLAYER]}
        </Text>
      );
    }
  }

  return currentMatch.result ? (
    <View style={styles.view}>
      <View style={matchBoxStyles.matchBox}>
        <View style={matchBoxStyles.player1}>
          <Text>{currentMatch?.result[0]?.name}</Text>

          <View style={matchBoxStyles.playerResult}>
            {renderPlayerResult('p1', 'p2')}
            {currentMatch?.result[0]?.games.map((set: any) => (
              <Text> {set}</Text>
            ))}
          </View>
        </View>

        <View style={matchBoxStyles.player2}>
          <Text>{currentMatch?.result[1]?.name}</Text>

          <View style={matchBoxStyles.playerResult}>
            {renderPlayerResult('p2', 'p1')}
            {currentMatch?.result[1]?.games.map((set: any) => (
              <Text> {set}</Text>
            ))}
          </View>
        </View>
      </View>
      <View style={matchBoxStyles.dateBox}>
        <Text style={globalStyles.grayText}>
          {getDateString(currentMatch?.date)}
        </Text>
        <Text style={styles.time}>Best of 3 Sets</Text>
      </View>
    </View>
  ) : (
    <Text>...loading...</Text>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 130,
  },
  time: {},
});
