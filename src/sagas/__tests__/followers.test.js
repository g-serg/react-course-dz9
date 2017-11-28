import {
  fetchFollowersSuccess,
  fetchFollowersFailure
} from '../../actions/followers';
import {call, put} from 'redux-saga/effects';
import {fetchFollowersSaga} from '../followers';
import {getUserFollowers} from '../../api';

describe('Saga Followers:', () => {
  it('call getUserFollowers', () => {
    const action = {payload: 'test_login'};
    const saga = fetchFollowersSaga(action);
    expect(saga.next().value).toEqual(call(getUserFollowers, 'test_login'));
  });
  it('dispatch action fetchFollowersSuccess with followers from call on success call', () => {
    const action = {payload: 'test_login'};
    const saga = fetchFollowersSaga(action);
    const followers = [{login: 'test', id: '1'}];
    saga.next();
    expect(saga.next(followers).value).toEqual(
      put(fetchFollowersSuccess(followers))
    );
  });
  it('dispatch action fetchFollowersFailure with followers from call on success call', () => {
    const action = {payload: 'test_login'};
    const error = new Error('test error');
    const saga = fetchFollowersSaga(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(put(fetchFollowersFailure(error)));
  });
});
