import { useEffect } from "react";
import Router from "./components/Router"
import { ToastContainer } from 'react-toastify';
import { useDispatch } from "react-redux";

import 'react-toastify/dist/ReactToastify.css';
import { setAuthData } from "./redux/reducers/auth";
import { SagaActions } from "./redux/sagas/actions";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(setAuthData({
        isAuthenticated: true,
        token,
        message: 'Sign in successfully',
      }))
      dispatch({ type: SagaActions.FetchProfile });
      dispatch({ type: SagaActions.FetchOrders });
    }
  }, [dispatch, token])

  return (
    <>
      <ToastContainer />
      <Router />
    </>
  )
}

export default App
