import CouponSlider from "../../components/CouponSlider";
import Cart from "../../components/Cart";
import Hero from "../../components/Hero";
import ProductsWithSidebar from "../../components/ProductsWithSidebar";
import CategoryFilter from "../../components/CategoryFilter";
import BottomNav from "../../components/BottomNav/BottomNav";

function Home() {
  return (
    <>
      <Hero />
      <CouponSlider />
      <CategoryFilter />
      <ProductsWithSidebar />
      <BottomNav />
      <Cart />
    </>
  )
}

export default Home
