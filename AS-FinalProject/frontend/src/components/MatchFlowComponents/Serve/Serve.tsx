import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import matchButtonsStyles from '../../../theme/matchFlowButtons';
import {updatePoints} from '../../../redux/actions/actionCreators';

export default function Serve({navigation}: any) {
  const server = useSelector((store: any) => store.server);

  const dispatch = useDispatch();

  const [secondServe, setsecondServe] = useState(false);

  function handlePoint(player: Boolean) {
    let playerWhoWon;
    player ? (playerWhoWon = 'p1') : (playerWhoWon = 'p2');
    setsecondServe(false);
    dispatch(updatePoints(playerWhoWon));
  }
  function handleServeOut() {
    !secondServe
      ? setsecondServe(true)
      : (handlePoint(!server), setsecondServe(false));
  }

  return (
    <View>
      <View
        style={[
          styles.column,
          {
            left: `${server ? '6%' : '58%'}`,
          },
        ]}>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => navigation.navigate('PointEnder')}>
          <Text style={matchButtonsStyles.textGreen}>Serve In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handleServeOut()}>
          <Text style={matchButtonsStyles.textRed}>Serve Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={matchButtonsStyles.button}
          onPress={() => handlePoint(server)}>
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
