import { useSelector } from "react-redux";
import { ReduxStore } from "../redux/store";

export function useIsInWishlist(id: string) {
  const wishlists = useSelector((state: ReduxStore) => state.wishlist.wishlistResponse.content);

  const foundInWishlist = wishlists.find((wishlist) => wishlist.product.id === id);
  if(foundInWishlist) {
    return true;
  } else {
    return false
  }
}
