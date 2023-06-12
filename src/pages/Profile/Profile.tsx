import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from './Profile.module.scss';

import UpdateProfilePopup from "../../components/UpdateProfilePopup/UpdateProfilePopup";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfilePicture from '../../assets/profile1.jpg';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className={styles.ProfilePage}>
        <ProfileSidebar />
        <div className={styles.Profile}>
          <div>
            <div className={styles.Details__text}>
              <Typography variant="h6">Customer details</Typography>
            </div>
            <div className={styles.Profile__details}>
              <div>
                <Typography variant="subtitle1" className={styles.ProfileDetails__text}><b>First name:</b> Moinul</Typography>
                <Typography variant="subtitle1" className={styles.ProfileDetails__text}><b>Last name:</b> Hossain</Typography>
                <Typography variant="subtitle1" className={styles.ProfileDetails__text}><b>Email:</b> moinuhossain@example.com</Typography>
                <Typography variant="subtitle1" className={styles.ProfileDetails__text}><b>Phone Number:</b> +8801732748262</Typography>
              </div>
              <div>
                <Typography variant="subtitle1" fontWeight='bold'>Profile Image</Typography>
                <img className={styles.Profile__img} src={ProfilePicture} alt="profile-img" />
              </div>
            </div>
            <div className={styles.EditButton__box}>
              <Button className={styles.Profile__btn} size="large" variant="contained" onClick={() => setIsEditing(true)}>Edit Profile</Button>
            </div>
          </div>
        </div>
      </div>
      <UpdateProfilePopup isEditing={isEditing} setIsEditing={setIsEditing} />
    </>
  )
}
