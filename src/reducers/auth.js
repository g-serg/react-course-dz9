import {logout, authorize} from '../actions/auth';
import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

const isAuthorized = handleActions(
  {
    [authorize]: () => true,
    [logout]: () => false
  },
  false
);

export default combineReducers({
  isAuthorized
});

export const getIsAuthorized = ({auth}) => auth.isAuthorized;
