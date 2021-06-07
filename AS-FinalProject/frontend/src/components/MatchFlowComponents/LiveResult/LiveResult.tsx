import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import matchBoxStyles from '../../../theme/matchBoxTheme';
import globalStyles from '../../../theme/globalThemes';

export default function Stats() {
  return (
    <View style={styles.view}>
      <View style={matchBoxStyles.matchBox}>
        <View style={matchBoxStyles.player1}>
          <Text>Anna SALA</Text>
          <Text> 0 0 0 </Text>
        </View>
        <View style={matchBoxStyles.player2}>
          <Text>Serena WILLIAMS</Text>
          <Text>0 0 0 </Text>
        </View>
      </View>
      <View style={matchBoxStyles.dateBox}>
        <Text style={globalStyles.grayText}>MAY 23rd, 2021</Text>
        <Text style={styles.time}>Time 0:00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 130,
  },
  time: {},
});
