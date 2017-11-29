import {takeLatest, call, put, fork} from 'redux-saga/effects';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../actions/users';
import {getUserInformation} from '../api';

export function* fetchUserSaga({payload}) {
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

export function* fetchUserWatch() {
  yield fork(onFetchUserWatch);
}
