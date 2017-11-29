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

const ids = handleActions(
  {
    [fetchFollowersRequest]: () => [],
    [fetchFollowersSuccess]: (state, action) => action.payload.data
  },
  []
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

export const getIsFetching = ({followers}) => followers.isFetching;
export const getIsFetched = ({followers}) => followers.isFetched;
export const getIDs = ({followers}) => [...followers.ids];
export const getError = ({followers}) => followers.error;
