import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, StyleSheet} from 'react-native';
import matchBoxStyles from '../../../theme/matchBoxTheme';
import globalStyles from '../../../theme/globalThemes';
import {updateMatch} from '../../../redux/actions/actionCreators';

export default function LiveResult() {
  const currentMatch = useSelector((store: any) => store.currentMatch);
  let tokens = useSelector((store: any) => store.tokens);
  let {points} = useSelector((store: any) => store.currentGamePoints);
  const dispatch = useDispatch();
  function finishGame() {
    currentMatch.flow.points.push(points);
    currentMatch.flow.games.push({p1: 1, p2: 0});
    console.log(currentMatch);
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
          finishGame();
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
        finishGame();
        return <Text style={matchBoxStyles.playerPoint}>Game</Text>;
      } else {
        return <Text style={matchBoxStyles.playerPoint}>-</Text>;
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
