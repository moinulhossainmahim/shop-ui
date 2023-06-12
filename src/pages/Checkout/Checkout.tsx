import { Button, Stack, TextField, TextareaAutosize, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import styles from './Checkout.module.scss';
import { useSelector } from "react-redux";
import { ReduxStore } from "../../redux/store";
import useGetCartTotal from "../../hooks/useGetCartTotal";

export default function Checkout() {
  const cartItems = useSelector((state: ReduxStore) => state.cart.cartProducts);
  const { totalPrice } = useGetCartTotal();

  return (
    <Box className={styles.Checkout__container}>
      <Box className={styles.Checkout__content}>
        <Stack className={styles.CheckoutForm__container}>
          <Typography variant="h5" fontWeight="bold" mb={2}>Delivery information</Typography>
          <form noValidate className={styles.Checkout__form}>
            <TextField
              label='Name'
              variant="outlined"
            />
            <TextField
              label='Phone'
              variant="outlined"
            />
            <div className={styles.InpputIn__row}>
              <TextField
                label='City'
                variant="outlined"
                className={styles.InpputIn__row__textfield}
              />
              <TextField
                label='State'
                variant="outlined"
                className={styles.InpputIn__row__textfield}
              />
            </div>
            <div className={styles.InpputIn__row}>
              <TextField
                label='Postal Code'
                variant="outlined"
                className={styles.InpputIn__row__textfield}
              />
              <TextField
                label='Street'
                variant="outlined"
                className={styles.InpputIn__row__textfield}
              />
            </div>
            <TextareaAutosize placeholder="Order Notes" minRows={15} className={styles.Notes} />
          </form>
        </Stack>
        <Stack className={styles.CheckoutOrder__container}>
          <Typography variant="h5" fontWeight="bold" mb={2}>Order summary</Typography>
          <div className={styles.Order}>
            <div className={styles.Product__container}>
              {cartItems.map((cartItem) => (
                <>
                  <Stack direction="row" className={styles.Product}>
                    <div className={styles.Product__left}>
                      <div>
                        <img className={styles.Product__img} src={cartItem.img} alt="cart-img1" />
                      </div>
                      <div className={styles.Product__details}>
                        <Typography variant="subtitle1" fontWeight='bold'>{cartItem.name}</Typography>
                        <Typography variant="body2">{cartItem.amount} x {cartItem.discountPrice}</Typography>
                      </div>
                    </div>
                    <div className={styles.Product__right}>
                      <Typography variant="subtitle1" fontWeight='bold'>${(Number(cartItem.discountPrice.slice(1)) * cartItem.amount).toFixed(2)}</Typography>
                    </div>
                  </Stack>
                </>
              ))}
            </div>
            <div>
              <Typography variant="subtitle1" className={styles.Price}>
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </Typography>
              <Typography variant="subtitle1" className={styles.Price}>
                <span>Discout</span>
                <span>$0.00</span>
              </Typography>
              <Typography variant="subtitle1" className={styles.Price}>
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </Typography>
            </div>
            <Button variant="contained" className={styles.Order__btn}>Place Order</Button>
          </div>
        </Stack>
      </Box>
    </Box>
  )
}
