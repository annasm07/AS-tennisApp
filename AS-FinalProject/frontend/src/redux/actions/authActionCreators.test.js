import axios from 'axios';
import {logIn, signUp} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('Given logIn function, ', () => {
  test('when resolved, then dispatch an object with type: LOG_IN and user: data', async () => {
    const user = {email: 'anna@mail.com', password: 'anna123'};
    const dispatch = jest.fn();
    const data = {token: ['abc123', 'def567']};
    axios.post.mockResolvedValue({data});
    await logIn(user)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOG_IN,
      user: data,
    });
  });

  test('when rejected, then return type: LOG_IN_ERROR', async () => {
    const user = {email: 'anna@mail.com', password: 'anna123'};
    const dispatch = jest.fn();
    axios.post.mockRejectedValue('error');
    await logIn(user)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: actionTypes.LOG_IN_ERROR});
  });
});

describe('Given signUp function, ', () => {
  test('when resolved, then dispatch an object with type: SIGNIN_USER and user: data', async () => {
    const user = {email: 'anna@mail.com', password: 'anna123'};
    const dispatch = jest.fn();
    const data = {email: 'anna@mail.com', password: 'anna123'};
    axios.post.mockResolvedValue({data});
    await signUp(user)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });

  test('when rejected, then return USER_ERROR', async () => {
    const user = {email: 'anna@mail.com', password: 'anna123'};
    const dispatch = jest.fn();
    axios.post.mockRejectedValue('error');
    await signUp(user)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: actionTypes.SIGN_UP_ERROR});
  });
});
