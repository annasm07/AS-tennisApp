import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getStatsInfo} from '../../redux/actions/actionCreators';
import styles from './StatsStyles';

export default function Stats({route}: any) {
  const {matchId} = route.params;
  const dispatch = useDispatch();

  let tokens = useSelector((store: any) => store.tokens);
  let stats = useSelector((store: any) => store.selectedStats);

  useEffect(() => {
    dispatch(getStatsInfo(tokens[0], matchId));
    console.log(matchId);
  }, [dispatch, tokens, matchId]);
  return (
    <SafeAreaView>
      {/* <Text style={styles.statsFullBar}>Hola</Text> */}
      <View style={styles.statsFullBar}>
        <View style={styles.statsPlayer1Bar} />
        <View style={styles.statsPlayer2Bar} />
      </View>
      {/* <View style={styles.statsFullBar} /> */}
      {stats.length ? (
        <Text>{JSON.stringify(stats[0]?.serve)}</Text>
      ) : (
        <Text>...loading...</Text>
      )}
      {/* {stats.length && console.log(stats[0].serve)} */}
    </SafeAreaView>
  );
}
