import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";

import styles from './Wishlists.module.scss';

export default function Wishlists() {
  return (
    <div className={styles.Wishlists__page}>
      <ProfileSidebar />
      <div className={styles.Wishlists}>
      </div>
    </div>
  )
}
