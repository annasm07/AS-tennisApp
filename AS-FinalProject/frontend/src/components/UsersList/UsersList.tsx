import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllPlayers} from '../../redux/actions/actionCreators';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function UsersList() {
  let tokens = useSelector((store: any) => store.tokens);
  let players = useSelector((store: any) => store.players);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlayers(tokens[0]));
  }, [dispatch, tokens]);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Find Other Users</Text>
      {players.length ? (
        players.map((player: any) => (
          <Text style={styles.names}>- {player.name}</Text>
        ))
      ) : (
        <Text>...loading...</Text>
      )}
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

export default UsersList;
