import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import styles from './ProfileSidebar.module.scss';

export default function ProfileSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return(
    <Box className={styles.Sidebar__container}>
      <Link
        component='button'
        className={classNames(styles.Sidebar__item, {
          [styles.Sidebar__item__active]: location.pathname === '/profile',
        })}
        onClick={() => navigate('/profile')}
      >
        Profile
      </Link>
      <Link
        component='button'
        className={classNames(styles.Sidebar__item, {
          [styles.Sidebar__item__active]: location.pathname === '/change-password',
        })}
        onClick={() => navigate('/change-password')}
      >
        Change password
      </Link>
      <Link
        component='button'
        className={classNames(styles.Sidebar__item, {
          [styles.Sidebar__item__active]: location.pathname === '/orders',
        })}
        onClick={() => navigate('/orders')}
      >
        My Orders
      </Link>
      <Link
        component='button'
        className={classNames(styles.Sidebar__item, {
          [styles.Sidebar__item__active]: location.pathname === '/wishlists',
        })}
        onClick={() => navigate('/wishlists')}
      >
        My Wishlists
      </Link>
      <Link component='button' className={styles.Sidebar__item}>
        Logout
      </Link>
    </Box>
  )
}