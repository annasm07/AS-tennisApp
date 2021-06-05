import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getPlayerInfo} from '../../redux/actions/actionCreators';

function Dashboard({dispatch, player, tokens, user}: any) {
  useEffect(() => {
    dispatch(getPlayerInfo(tokens[0], user.user.playerId));
  }, [dispatch, tokens, user]);
  console.log(player);
  return (
    <SafeAreaView>
      <View style={styles.playerBox}>
        <Image
          style={styles.playerImage}
          source={{
            uri: `${player.img}`,
          }}
        />
        <Text style={styles.playerName}>{player.name}</Text>
        <View>
          {player.record && (
            <Text>
              {' '}
              {player.record[0]} / {player.record[1]}
            </Text>
          )}
        </View>
      </View>

      {player.playedMatches &&
        player.playedMatches.map((match: any) => (
          <>
            <View style={styles.matchBox}>
              <View style={styles.player1}>
                <Text>{match.result[0].name}</Text>
                <Text>{match.result[0].games}</Text>
              </View>
              <View style={styles.player2}>
                <Text>{match.result[1].name}</Text>
                <Text>{match.result[1].games}</Text>
              </View>
            </View>
            <View style={styles.dateBox}>
              <Text>MAY 23rd, 2021</Text>
              <Text>Stats &gt;</Text>
            </View>
          </>
        ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  playerBox: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    flexDirection: 'row',
  },
  playerImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  playerName: {
    fontSize: 20,
    paddingLeft: 20,
  },
  matchBox: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    marginBottom: 5,
  },
  dateBox: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#7A7A7A',
  },
  player1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  player2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
});

function mapStateToProps({player, tokens, user}: any) {
  return {
    player,
    tokens,
    user,
  };
}

export default connect(mapStateToProps)(Dashboard);
