import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';
import Typography from "@mui/material/Typography";
import { BsFillBagCheckFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'

import styles from './Cart.module.scss';

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="contained" className={styles.Cart__button} onClick={() => setIsOpen(true)}>
        <div className={styles.CartButton__top}>
          <span>
            <BsFillBagCheckFill size={20} color="white"/>
          </span>
          <span>2 Items</span>
        </div>
        <span>
          $0.00
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
              <span className={styles.Item__text}>2 Items</span>
            </Box>
            <Button className={styles.CartTop__cancelBtn} onClick={() => setIsOpen(false)}>
              <RxCross2 size={15}/>
            </Button>
          </Stack>
          <div className={styles.Product__container}>
            <Stack direction="row" className={styles.Product}>
              <div className={styles.Product__left}>
                <div className={styles.Product__amount}>
                  <button className={styles.ProductAmount__btn}><HiPlusSm /></button>
                  <span>1</span>
                  <button className={styles.ProductAmount__btn}><HiMinusSm /></button>
                </div>
                <div>
                  <img className={styles.Product__img} src="https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F13%2Fconversions%2FGreenLimes-thumbnail.jpg&w=3840&q=75" alt="cart-img1" />
                </div>
                <div className={styles.Product__details}>
                  <Typography variant="subtitle1" fontWeight='bold'>Lime</Typography>
                  <span>$1.50</span>
                  <span>1 x 4pc(s)</span>
                </div>
              </div>
              <div className={styles.Product__right}>
                <Typography variant="subtitle1" fontWeight='bold'>$1.50</Typography>
                <Button className={styles.Product__cancel}>
                  <RxCross2 size={15}/>
                </Button>
              </div>
            </Stack>
            <Stack direction="row" className={styles.Product}>
              <div className={styles.Product__left}>
                <div className={styles.Product__amount}>
                  <button className={styles.ProductAmount__btn}><HiPlusSm /></button>
                  <span>1</span>
                  <button className={styles.ProductAmount__btn}><HiMinusSm /></button>
                </div>
                <div>
                  <img className={styles.Product__img} src="https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F19%2Fstrawberry.jpg&w=3840&q=75" alt="cart-img1" />
                </div>
                <div className={styles.Product__details}>
                  <Typography variant="subtitle1" fontWeight='bold'>Strawberry</Typography>
                  <span>$1.50</span>
                  <span>1 x 4pc(s)</span>
                </div>
              </div>
              <div className={styles.Product__right}>
                <Typography variant="subtitle1" fontWeight='bold'>$1.50</Typography>
                <Button className={styles.Product__cancel}>
                  <RxCross2 size={15}/>
                </Button>
              </div>
            </Stack>
          </div>
          <footer className={styles.Cart__footer}>
            <Button  className={styles.Checkout__btn} variant="contained">
              <span>Checkout</span>
              <Typography className={styles.CheckoutBtn__amount} variant="subtitle1" fontWeight='bold'>$3.00</Typography>
            </Button>
          </footer>
        </section>
      </Drawer>
    </>
  )
}
