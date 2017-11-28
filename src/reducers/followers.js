import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from '../actions/followers';
import {combineReducers} from 'redux';
import {handleAction, handleActions} from 'redux-actions';

const isFetching = handleActions(
  {
    [fetchFollowersRequest]: () => true,
    [fetchFollowersSuccess]: () => false,
    [fetchFollowersFailure]: () => false
  },
  false
);

const isFetched = handleActions(
  {
    [fetchFollowersRequest]: () => false,
    [fetchFollowersSuccess]: () => true,
    [fetchFollowersFailure]: () => true
  },
  false
);

const ids = handleAction(
  fetchFollowersSuccess,
  (state, action) => action.payload,
  {}
);

const error = handleAction(
  fetchFollowersFailure,
  (state, action) => action.error,
  null
);

export default combineReducers({
  isFetching,
  isFetched,
  ids,
  error
});

export const getIsFetching = state => state.isFetching;
export const getIsFetched = state => state.isFetched;
export const getIDs = state => ({...state.ids});
export const getError = state => state.error;
