import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import matchBoxStyles from '../../../theme/matchBoxTheme';
import globalStyles from '../../../theme/globalThemes';

export default function Stats() {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  time: {},
});
