import { ICartItem } from "../redux/reducers/cart";

export function isInCart(cartItems: ICartItem[], id: string) {
  return cartItems.some((item) => item.id === id);
}
