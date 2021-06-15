import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import {Provider} from 'react-redux';
import Dashboard from './Dashboard';

jest.mock('../../redux/actions/actionCreators');

describe('When invoked a Dashboard component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    player: {
      record: [10, 3],
      name: 'Anna Sala',
      playedMatches: [
        {
          result: [
            {
              games: [0, 0, 0],
              name: 'Anna',
            },
            {
              games: [0, 0, 0],
              name: 'Sala',
            },
          ],
        },
      ],
    },
    tokens: ['abc', 'cde'],
    user: {user: {playerId: '123cde'}},
  });
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'getPlayerInfo').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });
  test('Should render dashboard component', () => {
    const dashboard = render(
      <Provider store={store}>
        <Dashboard navigation={navigation} />
      </Provider>,
    );
    expect(dashboard).toMatchSnapshot();
  });

  test('When Match is pressed, it shour navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Dashboard navigation={navigation} />
      </Provider>,
    );
    const matchBox = getByTestId('matchBox');
    fireEvent.press(matchBox);
    expect(navigation.navigate).toHaveBeenCalled();
  });
});
