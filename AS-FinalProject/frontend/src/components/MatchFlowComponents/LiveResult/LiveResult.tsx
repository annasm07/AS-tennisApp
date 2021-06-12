import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, StyleSheet} from 'react-native';
import matchBoxStyles from '../../../theme/matchBoxTheme';
import globalStyles from '../../../theme/globalThemes';
import {updateMatch, endGames} from '../../../redux/actions/actionCreators';
import {counterLogicScoring} from '../../../utils/counterLogic';
import {checkEndSet} from '../../../utils/checkEndSet';

export default function LiveResult({navigation}: any) {
  const currentMatch = useSelector((store: any) => store.currentMatch);
  let tokens = useSelector((store: any) => store.tokens);
  let {points} = useSelector((store: any) => store.currentGamePoints);
  let currentSetGames = useSelector((store: any) => store.currentSetGames);
  let currentMatchSets = useSelector((store: any) => store.currentMatchSets);

  const p1Sets =
    currentMatch.flow?.sets[currentMatch.flow.sets.length - 1]?.p1 || 0;
  const p2Sets =
    currentMatch.flow?.sets[currentMatch.flow.sets.length - 1]?.p2 || 0;
  useEffect(() => {
    (p1Sets === 2 || p2Sets === 2) && navigation.navigate('Dashboard');
  }, [p1Sets, p2Sets, navigation]);

  const dispatch = useDispatch();

  function finishSet(playerWhoWon: String, games: any) {
    console.log('currentMatch --->', currentMatch);
    dispatch(endGames(playerWhoWon));
    currentMatch.flow.games.push(games);
    console.log('currentMatchSets --->', currentMatchSets);
    currentMatch.flow.sets.push(currentMatchSets);
    console.log('currentMatch --->', currentMatch);
  }

  function finishGame(playerWhoWon: String) {
    currentSetGames = counterLogicScoring(playerWhoWon, currentSetGames);

    const gamesP1 = currentSetGames[currentSetGames.length - 1].p1;
    const gamesP2 = currentSetGames[currentSetGames.length - 1].p2;
    currentMatch.result[0].games[currentMatch.flow.sets.length || 0] = gamesP1;
    currentMatch.result[1].games[currentMatch.flow.sets.length || 0] = gamesP2;

    currentMatch.flow.points.push(points);

    checkEndSet(playerWhoWon, currentSetGames) &&
      finishSet(playerWhoWon, currentSetGames);

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
        <Text style={globalStyles.grayText}>{currentMatch?.date}</Text>
        <Text style={styles.time}>Time 0:00</Text>
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
