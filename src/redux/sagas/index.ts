import { all, takeEvery } from 'redux-saga/effects';
import { SagaActions } from './actions';
import { changePassword, fetchProfile, login, register, updateProfile } from './auth';
import { createAddress, deleteAddress, editAddress } from './address';
import { fetchCategories } from './category';
import { fetchProducts } from './products';
import { addToWishlist, fetchWishlist, removeFromWishlist } from './wishlist';
import { checkOrderAvailability, createOrder, fetchOrder, fetchOrders } from './orders';
import { fetchCheckoutSession } from './payment';

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
    takeEvery(SagaActions.FetchCategories, fetchCategories),
    takeEvery(SagaActions.FetchProducts, fetchProducts),
    takeEvery(SagaActions.FetchWishlist, fetchWishlist),
    takeEvery(SagaActions.AddToWishlist, addToWishlist),
    takeEvery(SagaActions.RemoveFromWishlist, removeFromWishlist),
    takeEvery(SagaActions.FetchOrders, fetchOrders),
    takeEvery(SagaActions.FetchOrder, fetchOrder),
    takeEvery(SagaActions.CreateOrder, createOrder),
    takeEvery(SagaActions.CheckOrderAvailability, checkOrderAvailability),
    takeEvery(SagaActions.FetchCheckoutSession, fetchCheckoutSession),
  ])
}
