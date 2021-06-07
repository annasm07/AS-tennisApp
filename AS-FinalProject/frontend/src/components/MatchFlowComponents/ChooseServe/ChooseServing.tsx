import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import matchBoxStyles from '../../../theme/matchBoxTheme';

export default function Stats({navigation}: any) {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Who is Serving?</Text>
      <TouchableOpacity
        style={matchBoxStyles.matchBox}
        onPress={() => navigation.navigate('PointFlow')}>
        <Text>PLAYER 1 NAME</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={matchBoxStyles.matchBox}
        onPress={() => navigation.navigate('PointFlow')}>
        <Text>PLAYER 2 NAME</Text>
      </TouchableOpacity>
    </View>
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
