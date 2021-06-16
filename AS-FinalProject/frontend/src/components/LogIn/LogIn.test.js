import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import {Provider} from 'react-redux';
import LogIn from './LogIn';

jest.mock('../../redux/actions/actionCreators');

describe('When invoked a LogIn component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    tokens: ['abc', 'cde'],
    user: {user: {playerId: '123cde'}},
  });
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'logIn').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });

  test('When typing on email input, then setEmail is invoked', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <LogIn navigation={navigation} />
      </Provider>,
    );
    const emailInput = getByPlaceholderText('Email');
    let setEmail = jest.fn();
    fireEvent(emailInput, 'onChangeText', setEmail);
    expect(setEmail).toHaveBeenCalled();
  });

  test('When typing on password input, then setPassword is invoked', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <LogIn navigation={navigation} />
      </Provider>,
    );
    const passwordInput = getByPlaceholderText('Password');
    let setPassword = jest.fn();
    fireEvent(passwordInput, 'onChangeText', setPassword);
    expect(setPassword).toHaveBeenCalled();
  });

  test('When Match is pressed, it should navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <LogIn navigation={navigation} />
      </Provider>,
    );
    const LogInButton = getByTestId('LogInButton');
    fireEvent.press(LogInButton);
    expect(actions.logIn).toHaveBeenCalled();
  });
});

describe('When invoked a LogIn component and use.name exists', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    tokens: ['abc', 'cde'],
    user: {user: {playerId: '123cde'}, name: 'Anna'},
  });
  let navigation;
  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
    };
  });
  test('Should render sign in component', () => {
    const logIn = render(
      <Provider store={store}>
        <LogIn navigation={navigation} />
      </Provider>,
    );
    expect(logIn).toMatchSnapshot();
  });
});
