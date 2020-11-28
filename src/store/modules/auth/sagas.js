import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, '/login', {
      email,
      password,
    });

    const {token, user} = response.data;

    api.defaults.headers['x-access-token'] = token;

    yield put(signInSuccess(token, user));
  } catch (err) {
    const {msg} = err.response.data;

    Alert.alert('Ops', msg);
    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers['x-access-token'] = token;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
