import { useLocation } from "react-router-dom";
import classNames from "classnames";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import styles from './ProfileSidebar.module.scss';

export default function ProfileSidebar() {
  const location = useLocation();

  return(
    <Box className={styles.Sidebar__container}>
      <Link
        component='button'
        className={classNames(styles.Sidebar__item, {
          [styles.Sidebar__item__active]: location.pathname === '/profile',
        })}
      >
        Profile
      </Link>
      <Link
        component='button'
        className={classNames(styles.Sidebar__item, {
          [styles.Sidebar__item__active]: location.pathname === '/change-password',
        })}
      >
        Change password
      </Link>
      <Link
        component='button'
        className={classNames(styles.Sidebar__item, {
          [styles.Sidebar__item__active]: location.pathname === '/orders',
        })}
      >
        My Orders
      </Link>
      <Link
        component='button'
        className={classNames(styles.Sidebar__item, {
          [styles.Sidebar__item__active]: location.pathname === '/wishlists',
        })}
      >
        My Wishlists
      </Link>
      <Link component='button' className={styles.Sidebar__item}>
        Logout
      </Link>
    </Box>
  )
}
