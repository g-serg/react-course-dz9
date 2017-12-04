import users from '../users';
import {fetchUserRequest, fetchUserSuccess, fetchUserFailure} from '../../actions/users';

describe('reducer users', () => {
  const payload = {user: 'user'};
  const error = new Error('error');

  describe('fetchUserRequest must set', () => {
    const next = users(undefined, {type: fetchUserRequest});

    it('isFetching === true', () => {
      expect(next.isFetching).toEqual(true);
    });
    it('isFetched === false', () => {
      expect(next.isFetched).toEqual(false);
    });
    it('data === null', () => {
      expect(next.data).toEqual(null);
    });
    it('error === null', () => {
      expect(next.error).toEqual(null);
    });
  });

  describe('fetchUserSuccess must set', () => {
    const next = users(undefined, {type: fetchUserSuccess, payload});

    it('isFetching === false', () => {
      expect(next.isFetching).toEqual(false);
    });
    it('isFetched === true', () => {
      expect(next.isFetched).toEqual(true);
    });
    it('data === payload', () => {
      expect(next.data).toEqual(payload);
    });
    it('error === null', () => {
      expect(next.error).toEqual(null);
    });
  });

  describe('fetchUserFailure must set', () => {
    const next = users(undefined, {type: fetchUserFailure, error});

    it('isFetching === false', () => {
      expect(next.isFetching).toEqual(false);
    });
    it('isFetched === true', () => {
      expect(next.isFetched).toEqual(true);
    });
    it('data === null', () => {
      expect(next.data).toEqual(null);
    });
    it('error === Error("error")', () => {
      expect(next.error).toEqual(error);
    });
  });
});
