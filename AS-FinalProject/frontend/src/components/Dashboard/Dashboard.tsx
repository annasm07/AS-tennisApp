import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getPlayerInfo} from '../../redux/actions/actionCreators';
import globalStyles from '../../theme/globalThemes';
import matchBoxStyles from '../../theme/matchBoxTheme';

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
            <View style={matchBoxStyles.matchBox}>
              <View style={matchBoxStyles.player1}>
                <Text>{match.result[0].name}</Text>
                <Text style={matchBoxStyles.result}>
                  {match.result[0].games}
                </Text>
              </View>
              <View style={matchBoxStyles.player2}>
                <Text>{match.result[1].name}</Text>
                <Text style={matchBoxStyles.result}>
                  {match.result[1].games}
                </Text>
              </View>
            </View>
            <View style={matchBoxStyles.dateBox}>
              <Text style={globalStyles.grayText}>MAY 23rd, 2021</Text>
              <Text style={globalStyles.grayText}>Stats &gt;</Text>
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
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  playerName: {
    fontSize: 20,
    paddingLeft: 20,
    textTransform: 'capitalize',
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
