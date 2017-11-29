import {logout, authorize} from '../actions/auth';
import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

const token = handleActions(
  {
    [authorize]: () => 1,
    [logout]: () => null
  },
  null
);

const isAuthorized = handleActions(
  {
    [authorize]: (state, action) => true,
    [logout]: () => false
  },
  false
);

export default combineReducers({
  token,
  isAuthorized
});

export const getIsAuthorized = ({auth}) => auth.isAuthorized;

export const getToken = ({auth}) => auth.token;
