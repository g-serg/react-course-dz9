import {fetchUserSuccess, fetchUserFailure, fetchTokenOwnerRequest} from '../../actions/users';
import {call, put} from 'redux-saga/effects';
import {fetchUserSaga} from '../users';
import {getTokenOwner, getUserInformation} from '../../api';
import requestFlow from '../request';

describe('Saga users:', () => {
  const action = {payload: 'test_login'};
  const response = {data: {login: 'test', id: '1'}};
  const error = new Error('test error');

  it('1. call getTokenOwner on fetchTokenOwnerRequest', () => {
    const value = call(requestFlow, getTokenOwner, action.payload);

    const saga = fetchUserSaga({...action, type: fetchTokenOwnerRequest.toString()});
    expect(saga.next().value).toEqual(value);
  });

  it('2. call getUserInformation on other action', () => {
    const value = call(requestFlow, getUserInformation, action.payload);

    const saga = fetchUserSaga(action);
    expect(saga.next().value).toEqual(value);
  });

  it('3. dispatch action fetchUserSuccess with response.data from call on success call', () => {
    const value = put(fetchUserSuccess(response.data));

    const saga = fetchUserSaga(action);
    saga.next();
    expect(saga.next(response).value).toEqual(value);
  });

  it('4. dispatch action fetchUserFailure with user from call on success call', () => {
    const value = put(fetchUserFailure(error));

    const saga = fetchUserSaga(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(value);
  });
});
