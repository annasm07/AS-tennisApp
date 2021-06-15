import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import matchButtonsStyles from '../../../theme/matchFlowButtons';

export default function Serve({navigation}: any) {
  const server = useSelector((store: any) => store.server);

  const [currentServer, setCurrentServer] = useState(server);

  useEffect(() => {
    setCurrentServer(server);
  }, [server]);

  return (
    <View>
      <View
        style={[
          styles.column,
          {
            left: `${currentServer ? '6%' : '58%'}`,
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
