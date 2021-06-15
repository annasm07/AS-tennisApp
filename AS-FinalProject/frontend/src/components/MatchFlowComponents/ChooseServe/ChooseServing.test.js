import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../../redux/actions/actionCreators';
import {Provider} from 'react-redux';
import ChooseServing from './ChooseServing';

jest.mock('../../../redux/actions/actionCreators');

describe('When invoked a Dashboard component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    currentMatch: {
      result: [{name: 'Anna'}, {name: 'Sala'}],
    },
  });
  let navigation;

  beforeEach(() => {
    jest.spyOn(actions, 'updateServer').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });
  test('Should render dashboard component', () => {
    const chooseServing = render(
      <Provider store={store}>
        <ChooseServing navigation={navigation} />
      </Provider>,
    );
    expect(chooseServing).toMatchSnapshot();
  });

  test('When Player 1 is pressed, updateServer to have been called', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <ChooseServing navigation={navigation} />
      </Provider>,
    );
    const ClickPlayer1 = getByTestId('ClickPlayer1');
    fireEvent.press(ClickPlayer1);
    expect(actions.updateServer).toHaveBeenCalled();
  });

  test('When Player 2 is pressed, updateServer to have been called', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <ChooseServing navigation={navigation} />
      </Provider>,
    );
    const ClickPlayer2 = getByTestId('ClickPlayer2');
    fireEvent.press(ClickPlayer2);
    expect(actions.updateServer).toHaveBeenCalled();
  });
});

describe('When invoked a Dashboard component without result', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    currentMatch: {},
  });
  let navigation;

  beforeEach(() => {
    jest.spyOn(actions, 'updateServer').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });
  test('When currentMatch.result does not exist, loading is rendered', () => {
    const chooseServing = render(
      <Provider store={store}>
        <ChooseServing navigation={navigation} />
      </Provider>,
    );
    expect(chooseServing).toMatchSnapshot();
  });
});
