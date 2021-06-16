import {render} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FixedHeaderMatch from './FixedHeaderMatch';

describe('When invoked a FixedHeaderMatch component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    user: {user: {playerId: '123cde'}},
  });
  test('Should render FixedHeaderMatch component', () => {
    const fixedHeaderMatch = render(
      <Provider store={store}>
        <FixedHeaderMatch />
      </Provider>,
    );
    expect(fixedHeaderMatch).toMatchSnapshot();
  });
});
