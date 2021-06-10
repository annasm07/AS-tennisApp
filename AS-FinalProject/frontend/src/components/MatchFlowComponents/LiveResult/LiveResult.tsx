import * as React from 'react';
import {useSelector} from 'react-redux';
import {Text, View, StyleSheet} from 'react-native';
import matchBoxStyles from '../../../theme/matchBoxTheme';
import globalStyles from '../../../theme/globalThemes';

export default function LiveResult() {
  const currentMatch = useSelector((store: any) => store.currentMatch);
  return currentMatch.result ? (
    <View style={styles.view}>
      <View style={matchBoxStyles.matchBox}>
        <View style={matchBoxStyles.player1}>
          <Text>{currentMatch?.result[0]?.name}</Text>
          <Text> 0 0 0 </Text>
        </View>
        <View style={matchBoxStyles.player2}>
          <Text>{currentMatch?.result[1]?.name}</Text>
          <Text>0 0 0 </Text>
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
