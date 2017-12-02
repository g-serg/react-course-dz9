import {fetchFollowersSuccess, fetchFollowersFailure} from '../../actions/followers';
import {call, put} from 'redux-saga/effects';
import {fetchFollowersSaga} from '../followers';
import {getUserFollowers} from '../../api';

describe('Saga Followers:', () => {
  const action = {payload: 'test_login'};
  const followers = [{login: 'test', id: '1'}];
  const error = new Error('test error');

  it('call getUserFollowers', () => {
    const saga = fetchFollowersSaga(action);
    expect(saga.next().value).toEqual(call(getUserFollowers, 'test_login'));
  });

  it('dispatch action fetchFollowersSuccess with followers from call on success call', () => {
    const saga = fetchFollowersSaga(action);
    saga.next();
    expect(saga.next(followers).value).toEqual(put(fetchFollowersSuccess(followers)));
  });

  it('dispatch action fetchFollowersFailure with followers from call on success call', () => {
    const saga = fetchFollowersSaga(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(put(fetchFollowersFailure(error)));
  });
});
