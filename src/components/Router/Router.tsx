import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Home from '../../pages/Home';
import Checkout from "../../pages/Checkout";
import Header from "../Header";
import Profile from "../../pages/Profile/Profile";
import ChangePassword from "../../pages/ChangePassword/ChangePassword";
import Wishlists from "../../pages/Wishlists/Wishlists";
import Orders from "../../pages/Orders/Orders";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login";
import OrderDetails from "../../pages/OrderDetails";
import { ReduxStore } from "../../redux/store";
import BottomNav from "../BottomNav";
import OptionsDrawer from "../OptionsDrawer";

export default function Router() {
  const location = useLocation();
  const isAuthenticated = useSelector((state: ReduxStore) => state.auth.isAuthenticated);

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    if (isAuthenticated ) {
      return children
    }
    return <Navigate to="/login" />
  }

  return (
    <>
      <CssBaseline />
      {location.pathname === '/login' || location.pathname === '/register' ? (
        null
      ) : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/change-password" element={
            <PrivateRoute>
              <ChangePassword />
            </PrivateRoute>
          }
        />
        <Route path="/wishlists" element={
            <PrivateRoute>
              <Wishlists />
            </PrivateRoute>
          }
        />
        <Route path="/orders" element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route path="/orders/:id" element={
          <PrivateRoute>
              <OrderDetails />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Ooops! it's a dead end!</h1>} />
      </Routes>
      <BottomNav />
      <OptionsDrawer />
    </>
  )
}
