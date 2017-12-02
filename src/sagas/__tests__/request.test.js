import requestFlow from '../request';
import {clearNetworkErrors, networkError} from '../../actions/network';
import {call, put, select} from 'redux-saga/effects';
import {logout} from '../../actions/auth';
import {getIsNetworkErrorPresent} from '../../reducers/network';

describe.only('Saga Request:', () => {
  const fn = () => {};
  const args = [];
  const error = new Error();
  error.response = {
    status: 401,
  };

  const saga = requestFlow(fn, args);

  it('Эфект call(fn, args)', () => {
    expect(saga.next().value).toEqual(call(fn, args));
  });

  it('Эфект select(getIsNetworkErrorPresent)', () => {
    expect(saga.next().value).toEqual(select(getIsNetworkErrorPresent));
  });

  it('Эфект put(clearNetworkErrors() on isNetworkErrorPresent', () => {
    expect(saga.next(true).value).toEqual(put(clearNetworkErrors()));
  });

  it('Эфект action put(networkError(error) on throw Error', () => {
    expect(saga.throw(error).value).toEqual(put(networkError(error)));
  });

  it('Эфект action put(logout()) on error.response.status === 401', () => {
    expect(saga.next().value).toEqual(put(logout()));
  });
});
