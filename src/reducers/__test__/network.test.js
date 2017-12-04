import network from '../network';
import {clearNetworkErrors, networkError} from '../../actions/network';

describe('reducer network', () => {
  describe('clearNetworkErrors must set', () => {
    const next = network(undefined, {type: clearNetworkErrors});
    it('1. error === null', () => {
      expect(next.error).toEqual(null);
    });
    it('2. message === null', () => {
      expect(next.message).toEqual(null);
    });
  });

  describe('networkError must set', () => {
    const message = 'error';
    const payload = {response: {data: {message: message}}};
    const next = network(undefined, {type: networkError, payload});
    it('1. error === {response: {data: {message: "error"}}}', () => {
      expect(next.error).toEqual(payload);
    });
    it('2. message === "error"', () => {
      expect(next.message).toEqual(message);
    });
  });
});
