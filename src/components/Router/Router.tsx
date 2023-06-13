import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Checkout from "../../pages/Checkout";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header";
import Profile from "../../pages/Profile/Profile";
import ChangePassword from "../../pages/ChangePassword/ChangePassword";
import Wishlists from "../../pages/Wishlists/Wishlists";
import Orders from "../../pages/Orders/Orders";

export default function Router() {
  const [scrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if(window.scrollY > window.innerHeight * 0.5) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll)

    return() => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  return (
    <>
      <CssBaseline />
      <Header scrolled={scrolled} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/wishlists" element={<Wishlists />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  )
}
