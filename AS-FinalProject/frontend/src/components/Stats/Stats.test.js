import {render} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import {Provider} from 'react-redux';
import Stats from './Stats';

jest.mock('../../redux/actions/actionCreators');

describe('When invoked a Dashboard component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    selectedStats: {
      stats: [
        {
          serve: {aces: 4, doubleFaults: 8},
          points: {
            forcedErrors: {baseLine: [4, 9]},
            unforcedErrors: {baseLine: [5, 11]},
            winners: {baseLine: [2, 4]},
          },
        },
        {
          serve: {aces: 4, doubleFaults: 8},
          points: {
            forcedErrors: {baseLine: [5, 11]},
            unforcedErrors: {baseLine: [5, 11]},
            winners: {baseLine: [2, 4]},
          },
        },
      ],
      match: {
        result: [
          {
            name: 'Anna',
            games: [2, 3, 4],
          },
          {
            name: 'Anna',
            games: [2, 3, 4],
          },
        ],
      },
    },
    tokens: ['abc', 'cde'],
    matchId: '123cde',
  });
  let route;
  let matchId;
  let selectedStats = {stats: [], match: {}};
  beforeEach(() => {
    jest.spyOn(actions, 'getStatsInfo').mockReturnValueOnce({type: ''});

    route = {
      params: {matchId: '123cde'},
    };
  });

  test('Should render Stats component', () => {
    const statsPage = render(
      <Provider store={store}>
        <Stats
          route={route}
          matchId={matchId}
          stats={selectedStats.stats}
          match={selectedStats.match}
        />
      </Provider>,
    );
    expect(statsPage).toMatchSnapshot();
  });
});

describe('When invoked a Dashboard component, stats.length = undefined', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    selectedStats: {
      stats: [],
      match: {
        result: [
          {
            name: 'Anna',
            games: [2, 3, 4],
          },
          {
            name: 'Anna',
            games: [2, 3, 4],
          },
        ],
      },
    },
    tokens: ['abc', 'cde'],
    matchId: '123cde',
  });
  let route;
  let matchId;
  let selectedStats = {stats: [], match: {}};
  beforeEach(() => {
    jest.spyOn(actions, 'getStatsInfo').mockReturnValueOnce({type: ''});

    route = {
      params: {matchId: '123cde'},
    };
  });

  test('Should render Stats component', () => {
    const statsPage = render(
      <Provider store={store}>
        <Stats
          route={route}
          matchId={matchId}
          stats={selectedStats.stats}
          match={selectedStats.match}
        />
      </Provider>,
    );
    expect(statsPage).toMatchSnapshot();
  });
});
