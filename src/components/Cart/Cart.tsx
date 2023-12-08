import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';
import Typography from "@mui/material/Typography";
import { BsFillBagCheckFill, BsBagXFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'

import styles from './Cart.module.scss';

import { ReduxStore } from "../../redux/store";
import { ProductToggleType } from "./types.d";
import { removeProduct, toggleQuantity } from "../../redux/reducers/cart";
import useGetCartTotal from "../../hooks/useGetCartTotal";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartRef = useRef(null);
  const { totalPrice } = useGetCartTotal();
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector((state: ReduxStore) => state.cart.cartProducts);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.cartRef = cartRef;
  }, [])

  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex' }}} className={styles.Cart__button} onClick={() => setIsOpen(true)}  ref={cartRef}>
        <div className={styles.CartButton__top}>
          <span>
            <BsFillBagCheckFill size={20} color="white"/>
          </span>
          <span>{cartItems.length} Items</span>
        </div>
        <span className={styles.Total__price}>
          ${totalPrice.toFixed(2)}
        </span>
      </Box>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <section className={styles.Cart}>
          <Stack direction='row' className={styles.Cart__top}>
            <Box className={styles.Cart__amount}>
              <span>
                <BsFillBagCheckFill color='green' size={30} />
              </span>
              <span className={styles.Item__text}>{cartItems.length} Items</span>
            </Box>
            <Button className={styles.CartTop__cancelBtn} onClick={() => setIsOpen(false)}>
              <RxCross2 size={15}/>
            </Button>
          </Stack>
          <div className={styles.Product__container}>
            {!cartItems.length && (
              <Stack className={styles.Empty__cart}>
                <BsBagXFill className={styles.Empty__bag} />
                <Typography variant="h5">No products found</Typography>
              </Stack>
            )}
            {cartItems.map((cartItem) => (
              <Stack direction="row" className={styles.Product} key={cartItem.id}>
                <div className={styles.Product__left}>
                  <div className={styles.Product__amount}>
                    <button
                      className={styles.ProductAmount__btn}
                      disabled={cartItem.quantity === cartItem.amount}
                      onClick={() => dispatch(toggleQuantity({ type: ProductToggleType.INCREMENT, id: cartItem.id }))}
                    >
                      <HiPlusSm />
                    </button>
                    <span>{cartItem.amount}</span>
                    <button
                      className={styles.ProductAmount__btn}
                      onClick={() => dispatch(toggleQuantity({ type: ProductToggleType.DECREMENT, id: cartItem.id }))}
                    >
                      <HiMinusSm />
                    </button>
                  </div>
                  <div>
                    <img className={styles.Product__img} src={String(cartItem.featuredImg)} alt="cart-img1" />
                  </div>
                  <div className={styles.Product__details}>
                    <Typography variant="subtitle1" fontWeight='bold'>{cartItem.name}</Typography>
                    <span>{cartItem.salePrice}</span>
                  </div>
                </div>
                <div className={styles.Product__right}>
                  <Typography variant="subtitle1" fontWeight='bold'>${(Number(cartItem.salePrice) * cartItem.amount).toFixed(2)}</Typography>
                  <Button
                    className={styles.Product__cancel}
                    onClick={() => dispatch(removeProduct({ id: cartItem.id }))}
                  >
                    <RxCross2 size={15}/>
                  </Button>
                </div>
              </Stack>
            ))}
          </div>
          <footer className={styles.Cart__footer}>
            <Button  className={styles.Checkout__btn} variant="contained" disabled={totalPrice ? false : true} onClick={() => navigate('/checkout')}>
              <span>Checkout</span>
              <Typography className={styles.CheckoutBtn__amount} variant="subtitle1" fontWeight='bold'>${totalPrice.toFixed(2)}</Typography>
            </Button>
          </footer>
        </section>
      </Drawer>
    </>
  )
}
