import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

import styles from './Wishlists.module.scss';

import Cart from "../../components/Cart/Cart";

export default function Wishlists() {
  return (
    <>
      <div className={styles.Wishlists__page}>
        <ProfileSidebar />
        <div className={styles.Wishlists}>
          <Typography variant="h6" className={styles.Wishlists__title}>My Wishlists</Typography>
          <Stack className={styles.Wishlists__container}>
            <div className={styles.Wishlist}>
              <div className={styles.Wishlist__left}>
                <img className={styles.Wishlist__left__img} src="https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F111%2Fconversions%2Fmagnetic-thumbnail.jpg&w=3840&q=75" alt="wishlist-img" />
                <div>
                  <Typography variant="subtitle1" fontWeight="bold">Magnetic Designs Women Printed Fit And Flare Dress</Typography>
                  <Typography variant="subtitle1">Clothing Shop</Typography>
                </div>
              </div>
              <div>
                <Typography variant="subtitle1" fontWeight="bold" textAlign="center">
                  <span>$72.00</span>
                  <span className={styles.Discount__price}>$80.00</span>
                </Typography>
                <div className={styles.Action__btns}>
                  <Button className={styles.Btn__AddToCart__Btn} variant="text">Add To Cart</Button>
                  <Button className={styles.Btn__Remove__Btn} variant="text" color="error">Remove</Button>
                </div>
              </div>
            </div>
            <Divider />

            <div className={styles.Wishlist}>
              <div className={styles.Wishlist__left}>
                <img className={styles.Wishlist__left__img} src="https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F104%2Fconversions%2FArmani_purse-thumbnail.jpg&w=3840&q=75" alt="wishlist-img" />
                <div>
                  <Typography variant="subtitle1" fontWeight="bold">Armani Purse</Typography>
                  <Typography variant="subtitle1">Bags Shop</Typography>
                </div>
              </div>
              <div>
                <Typography variant="subtitle1" fontWeight="bold" textAlign="center">
                  <span>$25.00</span>
                  <span className={styles.Discount__price}>$35.00</span>
                </Typography>
                <div className={styles.Action__btns}>
                  <Button className={styles.Btn__AddToCart__Btn} variant="text">Add To Cart</Button>
                  <Button className={styles.Btn__Remove__Btn} variant="text" color="error">Remove</Button>
                </div>
              </div>
            </div>
            <Divider />
          </Stack>
        </div>
      </div>
      <Cart />
    </>
  )
}
