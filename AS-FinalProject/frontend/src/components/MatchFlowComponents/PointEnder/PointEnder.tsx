import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import matchButtonsStyles from '../../../theme/matchFlowButtons';

export default function PointEnder({navigation}: any) {
  //   const [serveSide, setServerSide] = useState('5%');
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
          onPress={() => navigation.navigate('ServeButtons')}>
          <Text style={matchButtonsStyles.textRed}>Forced Error</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => navigation.navigate('ServeButtons')}>
          <Text style={matchButtonsStyles.textYellow}>Unforced Error</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => navigation.navigate('ServeButtons')}>
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
          onPress={() => navigation.navigate('ServeButtons')}>
          <Text style={matchButtonsStyles.textRed}>Forced Error</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => navigation.navigate('ServeButtons')}>
          <Text style={matchButtonsStyles.textYellow}>Unforced Error</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => navigation.navigate('ServeButtons')}>
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
