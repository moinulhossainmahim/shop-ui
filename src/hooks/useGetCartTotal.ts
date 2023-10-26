import { useSelector } from "react-redux";
import { ReduxStore } from "../redux/store";

export default function useGetCartTotal() {
  const cartItems = useSelector((state: ReduxStore) => state.cart.cartProducts);

  const { totalItems, totalPrice } = cartItems.reduce((cartTotal, cartItem) => {
    const { amount, salePrice } = cartItem;
    const itemTotal = amount * Number(salePrice);
    cartTotal.totalPrice += itemTotal;
    cartTotal.totalItems += amount;
    return cartTotal;
  }, {
    totalPrice: 0,
    totalItems: 0,
  })

  return { totalItems, totalPrice }
}
