import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import matchButtonsStyles from '../../../theme/matchFlowButtons';
import {counterLogicPoints} from '../../../utils/counterLogic';
import {updatePoints} from '../../../redux/actions/actionCreators';

export default function PointEnder({navigation}: any) {
  const dispatch = useDispatch();
  let currentGamePoints = useSelector((store: any) => store.currentGamePoints);

  function handlePoint(playerWhoWon: String) {
    currentGamePoints = counterLogicPoints(playerWhoWon, currentGamePoints);
    dispatch(updatePoints(currentGamePoints));

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
          <Text style={matchButtonsStyles.textRed}>Forced Error</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p2')}>
          <Text style={matchButtonsStyles.textYellow}>Unforced Error</Text>
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
          <Text style={matchButtonsStyles.textRed}>Forced Error</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p1')}>
          <Text style={matchButtonsStyles.textYellow}>Unforced Error</Text>
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
