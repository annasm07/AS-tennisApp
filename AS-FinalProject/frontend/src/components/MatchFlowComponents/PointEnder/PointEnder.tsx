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
      <View style={styles.column1}>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p2')}>
          <Text style={matchButtonsStyles.textRed} testID={'UnforecedError1'}>
            Unforced Error
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p2')}>
          <Text style={matchButtonsStyles.textYellow} testID={'ForecedError1'}>
            Forced Error
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p1')}>
          <Text style={matchButtonsStyles.textGreen} testID={'Winner1'}>
            Winner
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.column2}>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p1')}>
          <Text style={matchButtonsStyles.textRed} testID={'UnforecedError2'}>
            Unforced Error
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p1')}>
          <Text style={matchButtonsStyles.textYellow} testID={'ForecedError2'}>
            Forced Error
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint('p2')}>
          <Text style={matchButtonsStyles.textGreen} testID={'Winner2'}>
            Winner
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  column1: {
    marginTop: 10,
    left: '6%',
  },
  column2: {
    marginTop: 10,
    left: '18%',
  },
  row: {
    flexDirection: 'row',
  },
});
