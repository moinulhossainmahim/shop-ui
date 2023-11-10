import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

import styles from './Wishlists.module.scss';

import Cart from "../../components/Cart/Cart";
import { SagaActions } from "../../redux/sagas/actions";
import { ReduxStore } from "../../redux/store";
import { isInCart } from "../../utils/isInCart";
import { addProduct, removeProduct } from "../../redux/reducers/cart";
import Skeleton from "@mui/material/Skeleton";

export default function Wishlists() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state: ReduxStore) => state.wishlist.wishlistResponse.content);
  const cartItems = useSelector((state: ReduxStore) => state.cart.cartProducts);
  const isLoading = useSelector((state: ReduxStore) => state.loader.FetchWishlist);

  useEffect(() => {
    if(!wishlist.length) {
      dispatch({ type: SagaActions.FetchWishlist });
    }
  },[])

  function handleWishlistRemove(id: string) {
    dispatch({ type: SagaActions.RemoveFromWishlist, payload: { id }});
  }

  return (
    <>
      <div className={styles.Wishlists__page}>
        <ProfileSidebar />
        <div className={styles.Wishlists}>
          {!wishlist.length && !isLoading ? (
            <Stack className={styles.EmptyOrder__box} direction='column' gap={1}>
              <Typography variant='h6'>Empty wishlist</Typography>
              <Typography variant='subtitle1'>Add products to wishlist</Typography>
              <Button className={styles.Back__btn} variant='contained' onClick={() => navigate('/')}>Back to Products</Button>
            </Stack>
          ) : null}
          {!isLoading && wishlist.length ? (
            <>
              <Typography variant="h6" className={styles.Wishlists__title}>My Wishlists</Typography>
              <Stack className={styles.Wishlists__container} gap={2}>
                {wishlist?.map((wishlistItem) => (
                <div className={styles.Wishlist} key={wishlistItem.id}>
                  <div className={styles.Wishlist__left}>
                    <img className={styles.Wishlist__left__img} src={String(wishlistItem.product.featuredImg)} alt="wishlist-img" />
                    <div>
                      <Typography variant="subtitle1" fontWeight="bold">{wishlistItem.product.name}</Typography>
                      {/* <Typography variant="subtitle1">Clothing Shop</Typography> */}
                    </div>
                  </div>
                  <div>
                    <Typography variant="subtitle1" fontWeight="bold" textAlign="center">
                      <span>${wishlistItem.product.salePrice}</span>
                      <span className={styles.Discount__price}>${wishlistItem.product.price}</span>
                    </Typography>
                    <div className={styles.Action__btns}>
                      {isInCart(cartItems, wishlistItem.product.id) ? (
                        <Button
                          className={styles.Btn__AddToCart__Btn}
                          variant="text"
                          onClick={() => {
                            dispatch(removeProduct(wishlistItem.product))
                          }}
                        >Remove From Cart</Button>
                      ) : (
                        <Button
                          className={styles.Btn__AddToCart__Btn}
                          variant="text"
                          onClick={() => {
                            dispatch(addProduct(wishlistItem.product))
                          }}
                        >Add To Cart</Button>
                      )}
                      <Button className={styles.Btn__Remove__Btn} variant="text" color="error" onClick={() => handleWishlistRemove(wishlistItem.id)}>Remove</Button>
                    </div>
                  </div>
                </div>
                ))}
              </Stack>
            </>
          ) : null}
          {isLoading ? (
            <div className={styles.Loading__container}>
              <Skeleton variant="rectangular" width="100%" height={50} />
              <Skeleton variant="rectangular" width="100%" height={50} />
              <Skeleton variant="rectangular" width="100%" height={50} />
              <Skeleton variant="rectangular" width="100%" height={50} />
            </div>
          ) : null}
        </div>
      </div>
      <Cart />
    </>
  )
}
