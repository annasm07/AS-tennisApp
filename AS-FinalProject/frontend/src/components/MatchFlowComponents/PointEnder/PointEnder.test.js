import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../../redux/actions/actionCreators';
import {Provider} from 'react-redux';
import PointEnder from './PointEnder';

jest.mock('../../../redux/actions/actionCreators');

describe('When invoked a PointEnder component - serving player 1', () => {
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
  test('Should render PointEnder component', () => {
    const pointEnder = render(
      <Provider store={store}>
        <PointEnder navigation={navigation} />
      </Provider>,
    );
    expect(pointEnder).toMatchSnapshot();
  });

  test('When UnforecedError1 is pressed, it should navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <PointEnder navigation={navigation} />
      </Provider>,
    );
    const UnforecedError1 = getByTestId('UnforecedError1');
    const handlePoint = jest.fn();
    fireEvent.press(UnforecedError1, handlePoint);
    expect(handlePoint).not.toHaveBeenCalled();
  });

  test('When ForecedError1 is pressed, it should navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <PointEnder navigation={navigation} />
      </Provider>,
    );
    const ForecedError1 = getByTestId('ForecedError1');
    const handlePoint = jest.fn();
    fireEvent.press(ForecedError1, handlePoint);
    expect(handlePoint).not.toHaveBeenCalled();
  });

  test('When Winner1 is pressed, it should navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <PointEnder navigation={navigation} />
      </Provider>,
    );
    const Winner1 = getByTestId('Winner1');
    const handlePoint = jest.fn();
    fireEvent.press(Winner1, handlePoint);
    expect(handlePoint).not.toHaveBeenCalled();
  });

  test('When UnforecedError2 is pressed, it should navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <PointEnder navigation={navigation} />
      </Provider>,
    );
    const UnforecedError2 = getByTestId('UnforecedError2');
    const handlePoint = jest.fn();
    fireEvent.press(UnforecedError2, handlePoint);
    expect(handlePoint).not.toHaveBeenCalled();
  });

  test('When ForecedError2 is pressed, it should navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <PointEnder navigation={navigation} />
      </Provider>,
    );
    const ForecedError2 = getByTestId('ForecedError2');
    const handlePoint = jest.fn();
    fireEvent.press(ForecedError2, handlePoint);
    expect(handlePoint).not.toHaveBeenCalled();
  });

  test('When Winner2 is pressed, it should navigate to stats', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <PointEnder navigation={navigation} />
      </Provider>,
    );
    const Winner2 = getByTestId('Winner2');
    const handlePoint = jest.fn();
    fireEvent.press(Winner2, handlePoint);
    expect(handlePoint).not.toHaveBeenCalled();
  });
});
