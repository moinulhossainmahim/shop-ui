import { all, takeEvery } from 'redux-saga/effects';
import { SagaActions } from './actions';
import { login, register } from './auth';

export default function* sagas() {
  yield all([
    takeEvery(SagaActions.Register, register),
    takeEvery(SagaActions.Login, login),
  ])
}
