import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../actions/users';
import {combineReducers} from 'redux';
import {handleAction, handleActions} from 'redux-actions';

const isFetching = handleActions(
  {
    [fetchUserRequest]: () => true,
    [fetchUserSuccess]: () => false,
    [fetchUserFailure]: () => false
  },
  false
);

const isFetched = handleActions(
  {
    [fetchUserRequest]: () => false,
    [fetchUserSuccess]: () => true,
    [fetchUserFailure]: () => true
  },
  false
);

const data = handleAction(
  fetchUserSuccess,
  (state, action) => action.payload,
  {}
);

const error = handleAction(
  fetchUserFailure,
  (state, action) => action.error,
  null
);

export default combineReducers({
  isFetching,
  isFetched,
  data,
  error
});

export const getIsFetching = state => state.isFetching;
export const getIsFetched = state => state.isFetched;
export const getResult = state => ({...state.data});
export const getError = state => state.error;
