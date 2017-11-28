import {takeLatest, call, put, fork} from 'redux-saga/effects';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from '../actions/followers';
import {getUserFollowers} from '../api';

export function* fetchFollowersSaga({payload}) {
  try {
    const followers = yield call(getUserFollowers, payload);
    yield put(fetchFollowersSuccess(followers));
  } catch (error) {
    yield put(fetchFollowersFailure(error));
  }
}

function* onFetchFollowerWatch() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersSaga);
}

export default function*() {
  yield fork(onFetchFollowerWatch);
}
