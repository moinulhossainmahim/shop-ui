import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { GiCancel } from 'react-icons/gi';
import classNames from "classnames";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import styles from './UpdateProfilePopup.module.scss';

import { ReduxStore } from "../../redux/store";
import { ModalKey, setModal } from "../../redux/reducers/modal";
import { IProfileFormData } from "../../pages/Profile/types.d";
import { SagaActions } from "../../redux/sagas/actions";

interface Props {
  profileFormData: IProfileFormData;
  setProfileFormData: React.Dispatch<React.SetStateAction<IProfileFormData>>;
}

export default function UpdateProfilePopup({ profileFormData, setProfileFormData } : Props) {
  const dispatch = useDispatch();
  const open = useSelector((state: ReduxStore) => state.modal.ProfileEditPopup);
  const { user } = useSelector((state: ReduxStore) => state.auth);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragEnter, setDragEnter] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File>();
  const { fullName, email, avatar } = profileFormData;

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setUploadedFile(Array.from(event.dataTransfer.files)[0]);
    setDragEnter(false);
  }

  function handleProfileUpdate() {
    const newFormData = new FormData();
    if(uploadedFile) {
      newFormData.append('avatar', uploadedFile)
    }
    if(fullName !== user.fullName) {
      newFormData.append('fullName', profileFormData.fullName);
    }
    if(email !== user.email) {
      newFormData.append('email', email);
    }
    dispatch({ type: SagaActions.UpdateProfile, payload: { id: user.id, formData: newFormData }})
  }

  useEffect(() => {
    setUploadedFile(undefined)
  }, [])

  return (
    <Dialog
        fullWidth={true}
        maxWidth='xs'
        open={open}
        onClose={() => dispatch(setModal({ key: ModalKey.ProfileEditPopup, value: false }))}
        className={styles.Dialog}
      >
        <div className={styles.Dialog__content}>
          <div className={styles.ProfileEdit__img}>
            <Box
              className={classNames(styles.DialogDrag__area, {
                [styles.dragOver]: dragEnter,
              })}
              onDragEnter={() => setDragEnter(true)}
              onDragLeave={() => setDragEnter(false)}
              onDragOver={(event) => event.preventDefault()}
              onDrop={handleDrop}
            >
              <BsFillCloudArrowUpFill className={styles.Upload__icon} size={30}/>
              <Typography variant="subtitle2" gutterBottom>
                Drag and drop to upload profile image
              </Typography>
              <input
                type='file'
                hidden
                accept="image/*"
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(event: any) => {
                  const filesArr: File[] = Array.from(event.target.files);
                  setUploadedFile(filesArr[0]);
                }}
                ref={inputRef}
              />
              <Button size="small" className={styles.Upload__btn} variant="contained" onClick={() => inputRef.current?.click()}>
                Browse files
              </Button>
            </Box>
          </div>
          <div className={styles.Preview}>
            {uploadedFile ? (
              <>
                <img src={URL.createObjectURL(uploadedFile)} alt="profile-img" className={styles.Preview__img} />
                <GiCancel className={styles.Cancel__icon} onClick={() => setUploadedFile(undefined)} />
              </>
            ) : (
              <>
                {avatar ? (
                  <img src={typeof avatar === 'string' ? avatar : undefined} alt="profile-img" className={styles.Preview__img} />
                ) : null}
              </>
            )}
          </div>
          <div className={styles.ProfileEdit__form}>
						<form noValidate className={styles.Form__container}>
							<TextField
								label='Full Name'
								variant="outlined"
								size='small'
								type='text'
                value={fullName}
                onChange={(e) => setProfileFormData({ ...profileFormData, fullName: e.target.value })}
							/>
							<TextField
								label='Email'
								variant="outlined"
								size='small'
								type="email"
                value={email}
                onChange={(e) => setProfileFormData({ ...profileFormData, email: e.target.value })}
							/>
							{/* <TextField
								label='Phone number'
								variant="outlined"
								size='small'
								type="tel"
                value={phoneNumber}
                onChange={(e) => setProfileFormData({ ...profileFormData, phoneNumber: e.target.value })}
							/> */}
						</form>
          </div>
					<div className={styles.Button__container}>
						<Button
              variant="contained"
              color="warning"
              onClick={() => {
                dispatch(setModal({ key: ModalKey.ProfileEditPopup, value: false }))
                setProfileFormData({
                  fullName: user.fullName,
                  email: user.email,
                  avatar: user.avatar,
                })
              }}
            >Cancel</Button>
						<Button variant="contained" color="success" onClick={handleProfileUpdate}>Update</Button>
					</div>
        </div>
      </Dialog>
  )
}
