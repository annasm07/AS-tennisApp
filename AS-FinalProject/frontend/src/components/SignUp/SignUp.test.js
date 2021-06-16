import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import {Provider} from 'react-redux';
import SignUp from './SignUp';
import {
  hasNameError,
  hasEmailError,
  hasPasswordError,
} from '../../utils/validation';

jest.mock('../../redux/actions/actionCreators');
jest.mock('../../utils/validation');

describe('When invoked a SignIn component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    tokens: ['abc', 'cde'],
  });

  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'signUp').mockReturnValueOnce({type: ''});
    navigation = {
      navigate: jest.fn(),
    };
  });

  test('Should render SignUp component', () => {
    const signUp = render(
      <Provider store={store}>
        <SignUp navigation={navigation} />
      </Provider>,
    );
    expect(signUp).toMatchSnapshot();
  });

  test('Then hasNameError endEdit is invoked', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <SignUp navigation={navigation} />
      </Provider>,
    );
    const imageName = getByPlaceholderText('Full Name');
    fireEvent(imageName, 'onEndEditing', hasNameError);
    expect(hasNameError).toHaveBeenCalled();
  });

  test('Then hasEmailError endEdit is invoked', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <SignUp navigation={navigation} />
      </Provider>,
    );
    const imageEmail = getByPlaceholderText('Email');
    fireEvent(imageEmail, 'onEndEditing', hasEmailError);
    expect(hasEmailError).toHaveBeenCalled();
  });

  test('Then hasPasswordError endEdit is invoked', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <SignUp navigation={navigation} />
      </Provider>,
    );
    const imagePsswd = getByPlaceholderText('Password');
    fireEvent(imagePsswd, 'onEndEditing', hasPasswordError);
    expect(hasPasswordError).toHaveBeenCalled();
  });

  test('When ChoosePlayer is pressed, call set is player fn', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <SignUp navigation={navigation} />
      </Provider>,
    );
    const ChoosePlayerButton = getByTestId('ChoosePlayerButton1');
    let setIsPlayer = jest.fn();
    fireEvent.press(ChoosePlayerButton, setIsPlayer);
    expect(setIsPlayer).not.toHaveBeenCalled();
  });

  test('When ChooseCoach is pressed, call set is player fn', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <SignUp navigation={navigation} />
      </Provider>,
    );
    const ChooseCoachButton = getByTestId('ChooseCoachButton1');
    let setIsPlayer = jest.fn();
    fireEvent.press(ChooseCoachButton, setIsPlayer);
    expect(setIsPlayer).not.toHaveBeenCalled();
  });
});
