import {render} from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../../redux/actions/actionCreators';
import {Provider} from 'react-redux';
import LiveResult from './LiveResult';

jest.mock('../../../redux/actions/actionCreators');

describe('When invoked a LiveResult component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    currentMatch: {
      flow: {
        sets: [
          {
            p1: 0,
            p2: 1,
          },
          {
            p1: 1,
            p2: 1,
          },
        ],
      },
      result: [
        {
          games: [0, 0, 0],
          name: 'Anna',
        },
        {
          games: [0, 0, 0],
          name: 'Sala',
        },
      ],
    },
    currentGamePoints: {
      points: [
        {
          p1: 0,
          p2: 15,
        },
        {
          p1: 0,
          p2: 41,
        },
      ],
    },
    currentSetGames: [
      {
        p1: 0,
        p2: 1,
      },
      {
        p1: 1,
        p2: 1,
      },
    ],
    currentMatchSets: [
      {
        p1: 0,
        p2: 1,
      },
      {
        p1: 1,
        p2: 1,
      },
    ],
    server: true,
    tokens: ['abc', 'cde'],
    user: {user: {playerId: '123cde'}},
  });
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'updateSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateServer').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatch').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });

  test('Should render LiveResult component', () => {
    const liveResult = render(
      <Provider store={store}>
        <LiveResult navigation={navigation} />
      </Provider>,
    );
    expect(liveResult).toMatchSnapshot();
  });
});

describe('When invoked a LiveResult component, with other values - game', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    currentMatch: {
      flow: {
        sets: [
          {
            p1: 0,
            p2: 1,
          },
          {
            p1: 1,
            p2: 1,
          },
        ],
      },
      result: [
        {
          games: [0, 0, 0],
          name: 'Anna',
        },
        {
          games: [0, 0, 0],
          name: 'Sala',
        },
      ],
    },
    currentGamePoints: {
      points: [
        {
          p1: 0,
          p2: 15,
        },
        {
          p1: 40,
          p2: 40,
        },
      ],
    },
    currentSetGames: [
      {
        p1: 0,
        p2: 1,
      },
      {
        p1: 1,
        p2: 6,
      },
    ],
    currentMatchSets: [
      {
        p1: 0,
        p2: 1,
      },
      {
        p1: 1,
        p2: 2,
      },
    ],
    server: true,
    tokens: ['abc', 'cde'],
    user: {user: {playerId: '123cde'}},
  });
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'updateSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateServer').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatch').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });

  test('Should render LiveResult component', () => {
    const liveResult = render(
      <Provider store={store}>
        <LiveResult navigation={navigation} />
      </Provider>,
    );
    expect(liveResult).toMatchSnapshot();
  });
});

describe('When invoked a LiveResult component, with other values - game after ad', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    currentMatch: {
      flow: {
        sets: [
          {
            p1: 0,
            p2: 1,
          },
          {
            p1: 1,
            p2: 1,
          },
        ],
      },
      result: [
        {
          games: [0, 0, 0],
          name: 'Anna',
        },
        {
          games: [0, 0, 0],
          name: 'Sala',
        },
      ],
    },
    currentGamePoints: {
      points: [
        {
          p1: 0,
          p2: 15,
        },
        {
          p1: 41,
          p2: 43,
        },
      ],
    },
    currentSetGames: [
      {
        p1: 0,
        p2: 1,
      },
      {
        p1: 1,
        p2: 6,
      },
    ],
    currentMatchSets: [
      {
        p1: 0,
        p2: 1,
      },
      {
        p1: 1,
        p2: 2,
      },
    ],
    server: true,
    tokens: ['abc', 'cde'],
    user: {user: {playerId: '123cde'}},
  });
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'updateSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateServer').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatch').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });

  test('Should render LiveResult component', () => {
    const liveResult = render(
      <Provider store={store}>
        <LiveResult navigation={navigation} />
      </Provider>,
    );
    expect(liveResult).toMatchSnapshot();
  });
});

describe('When invoked a LiveResult component, with other values - ad', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    currentMatch: {
      flow: {
        sets: [
          {
            p1: 0,
            p2: 1,
          },
          {
            p1: 1,
            p2: 1,
          },
        ],
      },
      result: [
        {
          games: [0, 0, 0],
          name: 'Anna',
        },
        {
          games: [0, 0, 0],
          name: 'Sala',
        },
      ],
    },
    currentGamePoints: {
      points: [
        {
          p1: 0,
          p2: 15,
        },
        {
          p1: 40,
          p2: 41,
        },
      ],
    },
    currentSetGames: [
      {
        p1: 0,
        p2: 1,
      },
      {
        p1: 1,
        p2: 6,
      },
    ],
    currentMatchSets: [
      {
        p1: 0,
        p2: 1,
      },
      {
        p1: 1,
        p2: 2,
      },
    ],
    server: true,
    tokens: ['abc', 'cde'],
    user: {user: {playerId: '123cde'}},
  });
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'updateSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateServer').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatch').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });

  test('Should render LiveResult component', () => {
    const liveResult = render(
      <Provider store={store}>
        <LiveResult navigation={navigation} />
      </Provider>,
    );
    expect(liveResult).toMatchSnapshot();
  });
});

describe('When invoked a LiveResult component, with other values - ad x2', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    currentMatch: {
      flow: {
        sets: [
          {
            p1: 0,
            p2: 1,
          },
          {
            p1: 1,
            p2: 1,
          },
        ],
      },
      result: [
        {
          games: [0, 0, 0],
          name: 'Anna',
        },
        {
          games: [0, 0, 0],
          name: 'Sala',
        },
      ],
    },
    currentGamePoints: {
      points: [
        {
          p1: 0,
          p2: 15,
        },
        {
          p1: 43,
          p2: 44,
        },
      ],
    },
    currentSetGames: [
      {
        p1: 0,
        p2: 1,
      },
      {
        p1: 1,
        p2: 6,
      },
    ],
    currentMatchSets: [
      {
        p1: 0,
        p2: 1,
      },
      {
        p1: 1,
        p2: 2,
      },
    ],
    server: true,
    tokens: ['abc', 'cde'],
    user: {user: {playerId: '123cde'}},
  });
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'updateSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateServer').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatch').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });

  test('Should render LiveResult component', () => {
    const liveResult = render(
      <Provider store={store}>
        <LiveResult navigation={navigation} />
      </Provider>,
    );
    expect(liveResult).toMatchSnapshot();
  });
});

describe('When invoked a LiveResult component, with other values - duce x2', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    currentMatch: {
      flow: {
        sets: [
          {
            p1: 0,
            p2: 1,
          },
          {
            p1: 1,
            p2: 1,
          },
        ],
      },
      result: [
        {
          games: [0, 0, 0],
          name: 'Anna',
        },
        {
          games: [0, 0, 0],
          name: 'Sala',
        },
      ],
    },
    currentGamePoints: {
      points: [
        {
          p1: 0,
          p2: 15,
        },
        {
          p1: 44,
          p2: 44,
        },
      ],
    },
    currentSetGames: [
      {
        p1: 0,
        p2: 1,
      },
      {
        p1: 1,
        p2: 6,
      },
    ],
    currentMatchSets: [
      {
        p1: 0,
        p2: 1,
      },
      {
        p1: 1,
        p2: 2,
      },
    ],
    server: true,
    tokens: ['abc', 'cde'],
    user: {user: {playerId: '123cde'}},
  });
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'updateSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateServer').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatch').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });

  test('Should render LiveResult component', () => {
    const liveResult = render(
      <Provider store={store}>
        <LiveResult navigation={navigation} />
      </Provider>,
    );
    expect(liveResult).toMatchSnapshot();
  });
});

describe('When invoked a LiveResult component currentMatch.result = undefined', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    currentMatch: {
      flow: {
        sets: [],
      },
    },
    currentGamePoints: {
      points: [],
    },
    currentSetGames: [],
    currentMatchSets: [],
    server: true,
    tokens: ['abc', 'cde'],
    user: {user: {playerId: '123cde'}},
  });
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'updateSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchGames').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatchSets').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateServer').mockReturnValueOnce({type: ''});
    jest.spyOn(actions, 'updateMatch').mockReturnValueOnce({type: ''});

    navigation = {
      navigate: jest.fn(),
    };
  });

  test('Should render LiveResult component', () => {
    const liveResult = render(
      <Provider store={store}>
        <LiveResult navigation={navigation} />
      </Provider>,
    );
    expect(liveResult).toMatchSnapshot();
  });
});
