import {fetchUserRequest, fetchUserSuccess, fetchUserFailure} from '../actions/users';
import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

const isFetching = handleActions(
  {
    [fetchUserRequest]: () => true,
    [fetchUserSuccess]: () => false,
    [fetchUserFailure]: () => false,
  },
  false,
);

const isFetched = handleActions(
  {
    [fetchUserRequest]: () => false,
    [fetchUserSuccess]: () => true,
    [fetchUserFailure]: () => true,
  },
  false,
);

const data = handleActions(
  {
    [fetchUserRequest]: () => null,
    [fetchUserSuccess]: (state, action) => action.payload,
  },
  null,
);

const error = handleActions(
  {
    [fetchUserRequest]: () => null,
    [fetchUserFailure]: (state, action) => action.error,
  },
  null,
);

export default combineReducers({
  isFetching,
  isFetched,
  data,
  error,
});

export const getIsFetching = ({users}) => users.isFetching;
export const getIsFetched = ({users}) => users.isFetched;
export const getData = ({users}) => (users.data ? {...users.data} : null);
export const getError = ({users}) => users.error;
