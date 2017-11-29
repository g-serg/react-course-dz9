import {setToken, logout} from '../actions/auth';
import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

const token = handleActions(
  {
    [setToken]: (state, action) => action.payload,
    [logout]: () => null
  },
  null
);

export default combineReducers({
  token
});

export const getIsAuthorized = ({auth}) => auth.token !== null;

export const getToken = ({auth}) => auth.token;
