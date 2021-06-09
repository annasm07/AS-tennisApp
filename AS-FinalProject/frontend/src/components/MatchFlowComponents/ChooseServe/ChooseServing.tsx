import * as React from 'react';
import {useSelector} from 'react-redux';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import matchBoxStyles from '../../../theme/matchBoxTheme';

export default function Stats({navigation}: any) {
  const currentMatch = useSelector((store: any) => store.currentMatch);
  return currentMatch.result ? (
    <View style={styles.view}>
      <Text style={styles.title}>Who is Serving?</Text>
      <TouchableOpacity
        style={matchBoxStyles.matchBox}
        onPress={() => navigation.navigate('PointFlow')}>
        <Text>{currentMatch?.result[0]?.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={matchBoxStyles.matchBox}
        onPress={() => navigation.navigate('PointFlow')}>
        <Text>{currentMatch?.result[1]?.name}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <Text>...loading...</Text>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 100,
  },
  title: {
    fontSize: 26,
    paddingLeft: 20,
  },
});
