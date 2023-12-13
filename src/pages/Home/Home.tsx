import CouponSlider from "../../components/CouponSlider";
import Cart from "../../components/Cart";
import Hero from "../../components/Hero";
import ProductsWithSidebar from "../../components/ProductsWithSidebar";
import CategoryFilter from "../../components/CategoryFilter";

function Home() {
  return (
    <>
      <Hero />
      <CouponSlider />
      <CategoryFilter />
      <ProductsWithSidebar />
      <Cart />
    </>
  )
}

export default Home
