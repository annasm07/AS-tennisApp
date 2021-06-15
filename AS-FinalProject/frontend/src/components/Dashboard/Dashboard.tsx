import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getPlayerInfo} from '../../redux/actions/actionCreators';
import globalStyles from '../../theme/globalThemes';
import matchBoxStyles from '../../theme/matchBoxTheme';

function Dashboard({navigation}: any) {
  const player = useSelector((store: any) => store.player);
  const tokens = useSelector((store: any) => store.tokens);
  const user = useSelector((store: any) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayerInfo(tokens[0], user.user.playerId));
  }, [dispatch, tokens, user]);

  function getDateString(dateString: any) {
    const dateToDisplay = new Date(dateString).toLocaleDateString();
    return dateToDisplay;
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.playerBox}>
          <Image
            style={styles.playerImage}
            source={{
              uri: `${player.img}`,
            }}
          />
          <View style={styles.infoBox}>
            <Text style={styles.playerName}>{player.name}</Text>

            <View>
              {player.record && (
                <View style={styles.statsFullBar}>
                  <View
                    style={[
                      styles.statsWins,
                      {
                        width: `${
                          (player.record[0] /
                            (player.record[0] + player.record[1])) *
                          100
                        }%`,
                      },
                    ]}
                  />
                  <View
                    style={[
                      styles.statsLosses,
                      {
                        width: `${
                          (player.record[1] /
                            (player.record[0] + player.record[1])) *
                          100
                        }%`,
                      },
                    ]}
                  />
                </View>
              )}
              <View style={styles.recordInfo}>
                <Text style={globalStyles.grayText}>Wins / Losses</Text>
                {player.record && (
                  <Text style={globalStyles.grayText}>
                    {' '}
                    {player.record[0]} / {player.record[1]}
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>

        {player.playedMatches &&
          player.playedMatches.map((match: any) => (
            <TouchableOpacity
              testID="matchBox"
              key={match._id}
              onPress={() => {
                navigation.navigate('Stats', {
                  matchId: match._id,
                });
              }}>
              <View key={match._id}>
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
                  <Text style={globalStyles.grayText}>
                    {getDateString(match.date)}
                  </Text>
                  <Text style={globalStyles.grayText}>Stats &gt;</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
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
    marginTop: 10,
    fontSize: 20,
    paddingLeft: 20,
    textTransform: 'capitalize',
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  statsFullBar: {
    marginTop: 15,
    marginLeft: 20,
    width: 220,
    alignSelf: 'center',
    backgroundColor: 'pink',
    height: 14,
    display: 'flex',
    flexDirection: 'row',
  },
  statsWins: {
    width: '50%',
    backgroundColor: '#96F87E',
    height: 14,
  },
  statsLosses: {
    width: '50%',
    backgroundColor: '#F68A5B',
    height: 14,
  },
  recordInfo: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Dashboard;
