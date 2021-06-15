import {render} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FixedHeader from './FixedHeader';

describe('When invoked a Dashboard component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    user: {user: {playerId: '123cde'}},
  });
  test('Should render dashboard component', () => {
    const fixedHeader = render(
      <Provider store={store}>
        <FixedHeader />
      </Provider>,
    );
    expect(fixedHeader).toMatchSnapshot();
  });
});
