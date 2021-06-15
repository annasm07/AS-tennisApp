import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllPlayers} from '../../redux/actions/actionCreators';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function UsersList() {
  let tokens = useSelector((store: any) => store.tokens);
  let players = useSelector((store: any) => store.players);
  let player = useSelector((store: any) => store.player);
  const dispatch = useDispatch();

  const newPlayersArray = players.filter(
    (playerInList: any) => playerInList._id !== player._id,
  );

  useEffect(() => {
    dispatch(getAllPlayers(tokens[0]));
  }, [dispatch, tokens]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Find Other Users</Text>
        {players.length ? (
          newPlayersArray.map((playerToPrint: any) => (
            <View style={styles.playerBox}>
              <Image
                style={styles.playerImage}
                source={{
                  uri: `${playerToPrint.img}`,
                }}
              />
              <View>
                <Text style={styles.names} key={playerToPrint._id}>
                  {playerToPrint.name}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Image
            source={{
              uri: 'https://www.gatoslechuzos.com/static/loading.gif',
            }}
            style={styles.loading}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingTop: 30,
    marginBottom: 90,
  },
  playerBox: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    flexDirection: 'row',
  },
  playerImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
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
  loading: {
    width: 200,
    height: 200,
    top: '45%',
    left: '40%',
  },
});

export default UsersList;
