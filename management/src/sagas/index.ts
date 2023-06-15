import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { UwcFetchToJSON } from '../utils/Fetcher';

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

// Worker Saga for user login
function* loginUser(action) {
  const { email, password } = action.payload;

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = yield call(UwcFetchToJSON, '/auth/login', 'POST', { email, password });

    yield put({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem('userCred', JSON.stringify(data));
  } catch (error) {
    const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message;
    yield put({ type: USER_LOGIN_FAIL, payload: errorMessage });
  }
}

// Worker Saga for user logout
function* logoutUser() {
  localStorage.removeItem('userCred');
  yield put({ type: USER_LOGOUT });
}

// Watcher Saga to listen for user login and logout actions
function* userSaga() {
  yield takeEvery(USER_LOGIN_REQUEST, loginUser);
  yield takeEvery(USER_LOGOUT, logoutUser);
}

export default userSaga;
