import {render} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import {Provider} from 'react-redux';
import UsersList from './UsersList';

jest.mock('../../redux/actions/actionCreators');

describe('When invoked a UsersList component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    player: {
      _id: 'abc456789',
    },
    tokens: ['abc', 'cde'],
    players: [
      {
        _id: 'abc456789',
        img: 'dfghjkl',
        name: 'ASM',
      },
      {
        _id: 'rtyu67890',
        img: 'dfghjkl',
        name: 'hjk',
      },
    ],
  });
  beforeEach(() => {
    jest.spyOn(actions, 'getPlayerInfo').mockReturnValueOnce({type: ''});
  });

  test('Should render UsersList component', () => {
    const usersList = render(
      <Provider store={store}>
        <UsersList />
      </Provider>,
    );
    expect(usersList).toMatchSnapshot();
  });
});

describe('When invoked a UsersList component players.length === undefined', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    player: {
      _id: 'abc456789',
    },
    tokens: ['abc', 'cde'],
    players: [],
  });
  beforeEach(() => {
    jest.spyOn(actions, 'getAllPlayers').mockReturnValueOnce({type: ''});
  });

  test('Should render UsersList component', () => {
    const usersList = render(
      <Provider store={store}>
        <UsersList />
      </Provider>,
    );
    expect(usersList).toMatchSnapshot();
  });
});
