import React from 'react';
import {useDispatch} from 'react-redux';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import matchButtonsStyles from '../../../theme/matchFlowButtons';
import {updatePoints} from '../../../redux/actions/actionCreators';

export default function PointEnder({navigation}: any) {
  const dispatch = useDispatch();

  function handlePoint(playerWhoWon: String) {
    dispatch(updatePoints(playerWhoWon));

    navigation.navigate('ServeButtons');
  }
  return (
    <View style={styles.row}>
      <View
        style={[
          styles.column,
          {
            left: '6%',
          },
        ]}>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p2')}>
          <Text style={matchButtonsStyles.textRed}>Unforced Error</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p2')}>
          <Text style={matchButtonsStyles.textYellow}>Forced Error</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p1')}>
          <Text style={matchButtonsStyles.textGreen}>Winner</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.column,
          {
            left: '18%',
          },
        ]}>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p1')}>
          <Text style={matchButtonsStyles.textRed}>Unforced Error</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p1')}>
          <Text style={matchButtonsStyles.textYellow}>Forced Error</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p2')}>
          <Text style={matchButtonsStyles.textGreen}>Winner</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
});
