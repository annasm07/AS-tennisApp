import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  getStatsInfo,
  getPlayerInfo,
  deleteMatch,
} from '../../redux/actions/actionCreators';
import StatsBar from '../StatsBars/StatsBars';
import matchBoxStyles from '../../theme/matchBoxTheme';

export default function Stats({route, navigation}: any) {
  const {matchId} = route.params;
  const dispatch = useDispatch();

  const tokens = useSelector((store: any) => store.tokens);
  const user = useSelector((store: any) => store.user);
  let {stats} = useSelector((store: any) => store.selectedStats);
  let {match} = useSelector((store: any) => store.selectedStats);

  useEffect(() => {
    dispatch(getStatsInfo(tokens[0], matchId));
  }, [dispatch, tokens, matchId]);
  function handleDelete() {
    dispatch(deleteMatch(tokens[0], matchId));
    dispatch(getPlayerInfo(tokens[0], user.user.playerId));
    navigation.navigate('Dashboard');
  }
  return (
    <SafeAreaView>
      <Text style={styles.title}>Match Details</Text>
      <ScrollView>
        {match && (
          <>
            <View style={matchBoxStyles.matchBox}>
              <View style={matchBoxStyles.player1}>
                <Text>{match?.result[0].name}</Text>
                <Text style={matchBoxStyles.result}>
                  {match?.result[0].games}
                </Text>
              </View>
              <View style={matchBoxStyles.player2}>
                <Text>{match?.result[1].name}</Text>
                <Text style={matchBoxStyles.result}>
                  {match?.result[1].games}
                </Text>
              </View>
            </View>
            <View style={styles.names}>
              <Text style={styles.names}>{match?.result[0].name}</Text>
              <Text style={styles.names}>{match?.result[1].name}</Text>
            </View>
          </>
        )}

        {stats?.length ? (
          <>
            <StatsBar
              title={'Aces'}
              p1Value={stats[0]?.serve.aces}
              p2Value={stats[1]?.serve.aces}
            />
            <StatsBar
              title={'Double Faults'}
              p1Value={stats[0]?.serve.doubleFaults}
              p2Value={stats[1]?.serve.doubleFaults}
            />
            <StatsBar
              title={'Forced Errors'}
              p1Value={stats[0]?.points.forcedErrors.baseLine[0]}
              p2Value={stats[1]?.points.forcedErrors.baseLine[0]}
            />
            <StatsBar
              title={'Unforced Errors'}
              p1Value={stats[0]?.points.unforcedErrors.baseLine[0]}
              p2Value={stats[1]?.points.unforcedErrors.baseLine[0]}
            />
            <StatsBar
              title={'Winners'}
              p1Value={stats[0]?.points.winners.baseLine[0]}
              p2Value={stats[1]?.points.winners.baseLine[0]}
            />
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete()}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Image
            source={{
              uri: 'https://www.gatoslechuzos.com/static/loading.gif',
            }}
            style={styles.loading}
          />
        )}
        {match && (
          <>
            <View>
              <Text>{match?.flow.points[0][3].p1}</Text>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loading: {
    width: 200,
    height: 200,
    top: '45%',
    left: '40%',
  },
  title: {
    fontSize: 26,
    paddingLeft: 20,
    marginTop: -25,
  },
  names: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    fontSize: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  deleteButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F6655B',
    borderRadius: 10,
    fontSize: 50,
    marginTop: 30,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: 120,
  },
});
