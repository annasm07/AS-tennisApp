import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../../redux/actions/actionCreators';
import {Provider} from 'react-redux';
import Serve from './Serve';

jest.mock('../../../redux/actions/actionCreators');

describe('When invoked a Serve component - serving player 1', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    server: true,
    secondServe: false,
  });
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'updatePoints').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });
  test('Should render Serve component', () => {
    const serve = render(
      <Provider store={store}>
        <Serve navigation={navigation} />
      </Provider>,
    );
    expect(serve).toMatchSnapshot();
  });

  test('When ServeOutButton is pressed, it should navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Serve navigation={navigation} />
      </Provider>,
    );
    const ServeOutButton = getByTestId('ServeOutButton');
    const handleServeOut = jest.fn();
    fireEvent.press(ServeOutButton, handleServeOut);
    expect(handleServeOut).not.toHaveBeenCalled();
  });
});

describe('When invoked a Serve component - serving player 2', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    server: false,
    secondServe: true,
  });
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'updatePoints').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });
  test('Should render Serve component', () => {
    const serve = render(
      <Provider store={store}>
        <Serve navigation={navigation} />
      </Provider>,
    );
    expect(serve).toMatchSnapshot();
  });

  test('When ServeIn is pressed, it should navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Serve navigation={navigation} />
      </Provider>,
    );
    const ServeInButton = getByTestId('ServeInButton');
    fireEvent.press(ServeInButton);
    expect(navigation.navigate).toHaveBeenCalled();
  });
  test('When ServeOutButton is pressed, it should navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Serve navigation={navigation} />
      </Provider>,
    );
    const ServeOutButton = getByTestId('ServeOutButton');
    const handleServeOut = jest.fn();
    fireEvent.press(ServeOutButton, handleServeOut);
    expect(handleServeOut).not.toHaveBeenCalled();
  });
  test('When AceButton is pressed, it should navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Serve navigation={navigation} />
      </Provider>,
    );
    const AceButton = getByTestId('AceButton');
    const handlePoint = jest.fn();
    fireEvent.press(AceButton, handlePoint);
    expect(actions.updatePoints).toHaveBeenCalled();
  });
});
