import { all, takeEvery } from 'redux-saga/effects';
import { SagaActions } from './actions';
import { changePassword, fetchProfile, login, register, updateProfile } from './auth';
import { createAddress, deleteAddress, editAddress } from './address';

export default function* sagas() {
  yield all([
    takeEvery(SagaActions.Register, register),
    takeEvery(SagaActions.Login, login),
    takeEvery(SagaActions.FetchProfile, fetchProfile),
    takeEvery(SagaActions.UpdateProfile, updateProfile),
    takeEvery(SagaActions.CreateAddress, createAddress),
    takeEvery(SagaActions.DeleteAddress, deleteAddress),
    takeEvery(SagaActions.EditAddress, editAddress),
    takeEvery(SagaActions.ChangePassword, changePassword),
  ])
}
