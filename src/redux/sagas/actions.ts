export enum SagaActions {
  Register = 'REGISTER',
  Login = 'LOGIN',
  FetchProfile = 'FETCH_PROFILE',
  UpdateProfile = 'UPDATE_PROFILE',

  CreateAddress = 'CREATE_ADDRESS',
  DeleteAddress = 'DELETE_ADDRESS',
  EditAddress = 'EDIT_ADDRESS',

  ChangePassword = 'CHANGE_PASSWORD',
  FetchProducts = 'FETCH_PRODUCTS',
  FetchCategories = 'FETCH_CATEGORIES',

  FetchWishlist = 'FETCH_WISHLIST',
  AddToWishlist = 'ADD_TO_WISHLIST',
  RemoveFromWishlist = 'REMOVE_FROM_WISHLIST',

  FetchOrders = 'FETCH_ORDERS',
  FetchOrder = 'FETCH_ORDER',
  CreateOrder = 'CREATE_ORDER',
  CheckOrderAvailability = 'CHECK_ORDER_AVAILABILITY',

  FetchCheckoutSession = 'FETCH_CHECKOUT_SESSION',
}
