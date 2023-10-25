import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from './Profile.module.scss';

import UpdateProfilePopup from "../../components/UpdateProfilePopup/UpdateProfilePopup";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import { ModalKey, setModal } from "../../redux/reducers/modal";
import { IProfileFormData } from "./types.d";
import { ReduxStore } from "../../redux/store";
import { SagaActions } from "../../redux/sagas/actions";
import UpdateContactPopup from "../../components/UpdateContactPopup";
import Stack from "@mui/material/Stack";
import CreateAddressPopup from "../../components/CreateAddressPopup";
import { IAddressFormData } from "../Checkout/types";
import { IconButton } from "@mui/material";
import { MdModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import ConfirmationDialog from "../../components/ConfirmationDialog";
import { parseAddress } from "../../utils/parseAddress";

export default function Profile() {
  const dispatch = useDispatch();
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const { user, isProfileFetched } = useSelector((state: ReduxStore) => state.auth);
  const [contact, setContact] = useState('+8801732748262');
  const [activeAddress, setActiveAddress] = useState('');
  const [profileFormData, setProfileFormData] = useState<IProfileFormData>({
    fullName: user.fullName,
    email: user.email,
    avatar: user.avatar,
  });
  const [formData, setFormData] = useState<IAddressFormData>({
    addressType: '',
    title: '',
    country: '',
    state: '',
    zip: '',
    city: '',
    streetAddress: '',
  })

  useEffect(() => {
    setProfileFormData({ fullName: user.fullName, email: user.email, avatar: user.avatar })
    if(!isProfileFetched) {
      dispatch({ type: SagaActions.FetchProfile });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProfileFetched])

  return (
    <>
      <div className={styles.ProfilePage}>
        <ProfileSidebar />
        <div className={styles.ProfileInfo__container}>
          <div className={styles.Profile}>
            <div>
              <div className={styles.Details__text}>
                <Typography variant="h6">Customer details</Typography>
              </div>
              <div className={styles.Profile__details}>
                <div>
                  <Typography variant="subtitle1" className={styles.ProfileDetails__text}><b>Full Name:</b> {user.fullName}</Typography>
                  <Typography variant="subtitle1" className={styles.ProfileDetails__text}><b>Email:</b> {user.email}</Typography>
                  <Typography variant="subtitle1" className={styles.ProfileDetails__text}><b>Phone Number: </b>01732748262</Typography>
                </div>
                <div>
                  {user.avatar ? (
                    <img className={styles.Profile__img} src={user.avatar} alt="profile-img" />
                  ) : <Typography variant="subtitle1">Empty profile image</Typography>}
                </div>
              </div>
              <div className={styles.EditButton__box}>
                <Button className={styles.Profile__btn} size="large" variant="contained" onClick={() => dispatch(setModal({ key: ModalKey.ProfileEditPopup, value: true }))}>Edit Profile</Button>
              </div>
            </div>
          </div>

          <Box className={styles.Contact__container}>
            <Box className={styles.Contact__container__top}>
              <Box className={styles.Contact__top__left}>
                <Typography variant="h5">Contact Number</Typography>
              </Box>
              <Button className={styles.UpdateBtn} onClick={() => setIsContactPopupOpen(true)}>+ Update</Button>
            </Box>
            <TextField
              variant="outlined"
              size='small'
              value={contact}
              fullWidth
              disabled
            />
          </Box>

          <Box className={styles.Contact__container}>
            <Box className={styles.Contact__container__top}>
              <Box className={styles.Contact__top__left}>
                <Typography variant="h5">Addresses</Typography>
              </Box>
              <Button className={styles.UpdateBtn} onClick={() => dispatch(setModal({ key: ModalKey.CreateAddressPopup, value: true }))}>+ Add</Button>
            </Box>
            <Stack className={styles.Address__container} direction='row'>
              {user.address.map((addr) => (
                <Box className={styles.Address} key={addr.id}>
                  <Box className={styles.Address__top}>
                    <Typography variant="subtitle2" fontWeight="bold">{addr.title}</Typography>
                    <Box className={styles.Btn__container}>
                      <IconButton aria-label="delete" className={styles.Btn}>
                        <MdModeEdit className={styles.Edit__btn} />
                      </IconButton>
                      <IconButton aria-label="delete" className={styles.Btn} onClick={() => {
                        setActiveAddress(addr.id);
                        dispatch(setModal({ key: ModalKey.ConfirmationPopup, value: true }));
                      }}>
                        <RxCross2 className={styles.Delete__btn}/>
                      </IconButton>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" padding="10px 0px">{parseAddress(addr)}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </div>
      </div>
      <UpdateProfilePopup profileFormData={profileFormData} setProfileFormData={setProfileFormData} />
      <UpdateContactPopup isOpen={isContactPopupOpen} setContact={setContact} setIsOpen={setIsContactPopupOpen} contact={contact} />
      <CreateAddressPopup formData={formData} setFormData={setFormData} />
      <ConfirmationDialog name="address" id={activeAddress} />
    </>
  )
}
