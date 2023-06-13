import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from './Profile.module.scss';

import UpdateProfilePopup from "../../components/UpdateProfilePopup/UpdateProfilePopup";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import { ModalKey, setModal } from "../../redux/reducers/modal";
import { IProfileFormData, initialFormData } from "./types.d";

export default function Profile() {
  const dispatch = useDispatch();
  const [profileFormData, setProfileFormData] = useState<IProfileFormData>(initialFormData);

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
                <Typography variant="subtitle1" className={styles.ProfileDetails__text}><b>First name:</b> {profileFormData.firstName}</Typography>
                <Typography variant="subtitle1" className={styles.ProfileDetails__text}><b>Last name:</b> {profileFormData.lastName}</Typography>
                <Typography variant="subtitle1" className={styles.ProfileDetails__text}><b>Email:</b> {profileFormData.email}</Typography>
                <Typography variant="subtitle1" className={styles.ProfileDetails__text}><b>Phone Number:</b> {profileFormData.phoneNumber}</Typography>
              </div>
              <div>
                <Typography variant="subtitle1" fontWeight='bold'>Profile Image</Typography>
                <img className={styles.Profile__img} src={typeof profileFormData.image === 'string' ? profileFormData.image : URL.createObjectURL(profileFormData.image)} alt="profile-img" />
              </div>
            </div>
            <div className={styles.EditButton__box}>
              <Button className={styles.Profile__btn} size="large" variant="contained" onClick={() => dispatch(setModal({ key: ModalKey.ProfileEditPopup, value: true }))}>Edit Profile</Button>
            </div>
          </div>
        </div>
      </div>
      <UpdateProfilePopup profileFormData={profileFormData} setProfileFormData={setProfileFormData} />
    </>
  )
}
