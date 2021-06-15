import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {newMatch} from '../../../redux/actions/actionCreators';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../../theme/globalThemes';

function NewMatch({navigation}: any) {
  const tokens = useSelector((store: any) => store.tokens);
  const player = useSelector((store: any) => store.player);

  const dispatch = useDispatch();

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  function handleNewMatch() {
    dispatch(newMatch(tokens[0], player.name, player2, player._id));
  }

  return (
    <SafeAreaView>
      <Text style={styles.title}>Start Match</Text>
      <View style={styles.label}>
        <Text style={globalStyles.grayText}>Select Player</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={playerName => setPlayer1(playerName)}
        placeholder="Player 1"
        defaultValue={player1}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        onChangeText={playerName => setPlayer2(playerName)}
        placeholder="Player 2"
        defaultValue={player2}
        autoCapitalize="words"
      />

      <TouchableOpacity
        style={globalStyles.buttonYellow}
        onPress={() => {
          handleNewMatch();
          navigation.navigate('MatchFlowHome');
        }}>
        <Text>Start Match</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    paddingLeft: 20,
    marginTop: -25,
  },
  label: {
    marginTop: 14,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textDecorationColor: '#7A7A7A',
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 20,
    fontSize: 16,
    marginHorizontal: 40,
    borderColor: '#7A7A7A',
  },
});

export default NewMatch;
