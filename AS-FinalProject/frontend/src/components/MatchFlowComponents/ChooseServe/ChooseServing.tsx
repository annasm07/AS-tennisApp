import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import matchBoxStyles from '../../../theme/matchBoxTheme';
import {updateServer} from '../../../redux/actions/actionCreators';

export default function Stats({navigation}: any) {
  const currentMatch = useSelector((store: any) => store.currentMatch);
  const dispatch = useDispatch();

  function handleClick(player: Boolean) {
    dispatch(updateServer(player));
    navigation.navigate('PointFlow');
  }
  return currentMatch.result ? (
    <View style={styles.view}>
      <Text style={styles.title}>Who is Serving?</Text>
      <TouchableOpacity
        style={matchBoxStyles.matchBox}
        onPress={() => handleClick(true)}>
        <Text>{currentMatch?.result[0]?.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={matchBoxStyles.matchBox}
        onPress={() => handleClick(false)}>
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
