import {takeLatest, select, call, put, fork} from 'redux-saga/effects';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../actions/users';
// import {getUserId} from './reducers';
import {getUserInformation, getUserFollowers} from '../api';

export function* fetchUserSaga({payload}) {
  // const showId = yield select(getUserId);
  try {
    const userInfo = yield call(getUserInformation, payload);
    yield put(fetchUserSuccess(userInfo));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

function* onFetchUserWatch() {
  yield takeLatest(fetchUserRequest, fetchUserSaga);
}

export default function*() {
  yield fork(onFetchUserWatch);
}
