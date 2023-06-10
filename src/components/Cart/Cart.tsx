import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';
import Typography from "@mui/material/Typography";
import { BsFillBagCheckFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'

import styles from './Cart.module.scss';

import { ReduxStore } from "../../redux/store";
import { ProductToggleType } from "./types.d";
import { removeProduct, toggleQuantity } from "../../redux/reducers/cart";
import useGetCartTotal from "../../hooks/useGetCartTotal";

export default function CartButton() {
  const dispatch = useDispatch();
  const { totalPrice } = useGetCartTotal();
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector((state: ReduxStore) => state.cart.cartProducts);

  return (
    <>
      <Button variant="contained" className={styles.Cart__button} onClick={() => setIsOpen(true)}>
        <div className={styles.CartButton__top}>
          <span>
            <BsFillBagCheckFill size={20} color="white"/>
          </span>
          <span>{cartItems.length} Items</span>
        </div>
        <span>
          ${totalPrice.toFixed(2)}
        </span>
      </Button>
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
              <Stack>
                <Typography variant="h5">Empty cart</Typography>
              </Stack>
            )}
            {cartItems.map((cartItem) => (
              <Stack direction="row" className={styles.Product} key={cartItem.id}>
                <div className={styles.Product__left}>
                  <div className={styles.Product__amount}>
                    <button
                      className={styles.ProductAmount__btn}
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
                    <img className={styles.Product__img} src={cartItem.img} alt="cart-img1" />
                  </div>
                  <div className={styles.Product__details}>
                    <Typography variant="subtitle1" fontWeight='bold'>{cartItem.name}</Typography>
                    <span>{cartItem.discountPrice}</span>
                  </div>
                </div>
                <div className={styles.Product__right}>
                  <Typography variant="subtitle1" fontWeight='bold'>${(Number(cartItem.discountPrice.slice(1)) * cartItem.amount).toFixed(2)}</Typography>
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
            <Button  className={styles.Checkout__btn} variant="contained" disabled={totalPrice ? false : true}>
              <span>Checkout</span>
              <Typography className={styles.CheckoutBtn__amount} variant="subtitle1" fontWeight='bold'>${totalPrice.toFixed(2)}</Typography>
            </Button>
          </footer>
        </section>
      </Drawer>
    </>
  )
}
