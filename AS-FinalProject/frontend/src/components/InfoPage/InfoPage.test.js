import {render} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import InfoPage from './InfoPage';

describe('When invoked a InfoPage component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    user: {user: {playerId: '123cde'}},
  });
  test('Should render InfoPage component', () => {
    const infoPage = render(
      <Provider store={store}>
        <InfoPage />
      </Provider>,
    );
    expect(infoPage).toMatchSnapshot();
  });
});
