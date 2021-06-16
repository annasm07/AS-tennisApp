import {render} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import StatsBar from './StatsBars';

describe('When invoked a StatsBar component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    user: {user: {playerId: '123cde'}},
  });
  let title;
  let p1Value;
  let p2Value;
  beforeEach(() => {
    title = 'Double Faults';
    p1Value = 10;
    p2Value = 8;
  });
  test('Should render StatsBar component', () => {
    const statsBar = render(
      <Provider store={store}>
        <StatsBar title={title} p1Value={p1Value} p2Value={p2Value} />
      </Provider>,
    );
    expect(statsBar).toMatchSnapshot();
  });
});
