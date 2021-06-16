import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../../redux/actions/actionCreators';
import {Provider} from 'react-redux';
import NewMatch from './NewMatch';

jest.mock('../../../redux/actions/actionCreators');

describe('When invoked a NewMatch component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    tokens: ['abc', 'cde'],
    player: {name: 'Anna', _id: 'asdfg'},
  });
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'newMatch').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });

  test('When Match is pressed, it should navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <NewMatch navigation={navigation} />
      </Provider>,
    );
    const StartMatchButton = getByTestId('StartMatchButton');
    fireEvent.press(StartMatchButton);
    expect(navigation.navigate).toHaveBeenCalled();
  });
});
