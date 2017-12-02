import {fetchFollowersSuccess, fetchFollowersFailure} from '../../actions/followers';
import {call, put} from 'redux-saga/effects';
import {fetchFollowersSaga} from '../followers';
import {getUserFollowers} from '../../api';

describe('Saga Followers:', () => {
  const action = {payload: 'test_login'};
  const response = {data: [{login: 'test', id: '1'}]};
  const error = new Error('test error');

  it('1. call getUserFollowers', () => {
    const value = call(getUserFollowers, action.payload);

    const saga = fetchFollowersSaga(action);
    expect(saga.next().value).toEqual(value);
  });

  it('2. dispatch action fetchFollowersSuccess with response.data from call on success call', () => {
    const value = put(fetchFollowersSuccess(response.data));

    const saga = fetchFollowersSaga(action);
    saga.next();
    expect(saga.next(response).value).toEqual(value);
  });

  it('3. dispatch action fetchFollowersFailure with followers from call on success call', () => {
    const value = put(fetchFollowersFailure(error));

    const saga = fetchFollowersSaga(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(value);
  });
});
