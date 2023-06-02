import { CssBaseline } from "@mui/material"
import CartButton from "./components/Cart/Cart"
import CouponSlider from "./components/CouponSlider"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ProductsWithSidebar from "./components/ProductsWithSidebar"

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Hero />
      <CouponSlider />
      <ProductsWithSidebar />
      <CartButton />
    </>
  )
}

export default App
