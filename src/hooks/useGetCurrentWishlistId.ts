import { useSelector } from "react-redux";
import { ReduxStore } from "../redux/store";

export function useCurrentWishlist(id: string) {
  const wishlists = useSelector((state: ReduxStore) => state.wishlist.wishlistResponse.content);

  const foundInWishlist = wishlists.find((wishlist) => wishlist.product.id === id);
  if(foundInWishlist) {
    return foundInWishlist.id;
  } else {
    return '';
  }
}
