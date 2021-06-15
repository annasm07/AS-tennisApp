import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getStatsInfo} from '../../redux/actions/actionCreators';
import StatsBar from '../StatsBars/StatsBars';

export default function Stats({route}: any) {
  const {matchId} = route.params;
  const dispatch = useDispatch();

  let tokens = useSelector((store: any) => store.tokens);
  let stats = useSelector((store: any) => store.selectedStats);

  useEffect(() => {
    dispatch(getStatsInfo(tokens[0], matchId));
  }, [dispatch, tokens, matchId]);

  return (
    <SafeAreaView>
      {stats.length ? (
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
        </>
      ) : (
        <Text>...loading...</Text>
      )}
    </SafeAreaView>
  );
}
