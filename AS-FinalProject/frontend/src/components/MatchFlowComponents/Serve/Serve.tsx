// import React, {useState} from 'react';
import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import matchButtonsStyles from '../../../theme/matchFlowButtons';

export default function Serve({navigation}: any) {
  //   const [serveSide, setServerSide] = useState('5%');
  return (
    <View>
      <View
        style={[
          styles.column,
          {
            left: '5%',
          },
        ]}>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => navigation.navigate('PointEnder')}>
          <Text style={matchButtonsStyles.textGreen}>Serve In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => navigation.navigate('PointEnder')}>
          <Text style={matchButtonsStyles.textRed}>Serve Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => navigation.navigate('PointEnder')}>
          <Text style={matchButtonsStyles.textGreen}>Ace</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    marginTop: 10,
  },
});
