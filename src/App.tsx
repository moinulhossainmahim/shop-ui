import { CssBaseline } from "@mui/material"
import CartButton from "./components/Cart/Cart"
import CouponSlider from "./components/CouponSlider"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { useEffect, useState } from "react"
import ProductsWithSidebar from "./components/ProductsWithSidebar"

function App() {
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
      <Hero />
      <CouponSlider />
      <ProductsWithSidebar />
      <CartButton />
    </>
  )
}

export default App
