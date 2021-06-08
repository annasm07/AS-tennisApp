import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import {getAllPlayers} from '../../redux/actions/actionCreators';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function UsersList({dispatch, tokens, players}: any) {
  useEffect(() => {
    dispatch(getAllPlayers(tokens[0]));
  }, [dispatch, tokens]);

  console.log('newMatch ---->', players);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Find Other Users</Text>
      {players.length &&
        players.map((player: any) => (
          <Text style={styles.names}>- {player.name}</Text>
        ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    paddingLeft: 20,
    marginTop: -25,
  },
  names: {
    fontSize: 20,
    paddingLeft: 30,
    marginTop: 10,
    textTransform: 'capitalize',
  },
});

function mapStateToProps({tokens, players}: any) {
  return {
    tokens,
    players,
  };
}

export default connect(mapStateToProps)(UsersList);
