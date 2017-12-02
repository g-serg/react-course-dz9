import {takeLatest, call, put, fork} from 'redux-saga/effects';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchTokenOwnerRequest,
} from '../actions/users';
import requestFlow from './request';
import {getTokenOwner, getUserInformation} from '../api';

export function* fetchUserSaga(action) {
  try {
    let response;
    if (fetchTokenOwnerRequest.toString() === action.type) {
      response = yield call(requestFlow, getTokenOwner, action.payload);
    } else {
      response = yield call(requestFlow, getUserInformation, action.payload);
    }
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

function* onFetchUserWatch() {
  yield takeLatest([fetchUserRequest, fetchTokenOwnerRequest], fetchUserSaga);
}

export function* fetchUserWatch() {
  yield fork(onFetchUserWatch);
}
