import {takeLatest, call, put, fork} from 'redux-saga/effects';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure,
} from '../actions/followers';
import {getUserFollowers} from '../api';

export function* fetchFollowersSaga(action) {
  try {
    const response = yield call(getUserFollowers, action.payload);

    yield put(fetchFollowersSuccess(response.data));
  } catch (error) {
    yield put(fetchFollowersFailure(error));
  }
}

function* onFetchFollowerWatch() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersSaga);
}

export function* fetchFollowersWatch() {
  yield fork(onFetchFollowerWatch);
}
