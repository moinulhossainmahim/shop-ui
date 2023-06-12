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
import { IProfileFormData, initialFormData } from "../../pages/Profile/types.d";

interface Props {
  profileFormData: IProfileFormData;
  setProfileFormData: React.Dispatch<React.SetStateAction<IProfileFormData>>;
}

export default function UpdateProfilePopup({ profileFormData, setProfileFormData } : Props) {
  const dispatch = useDispatch();
  const open = useSelector((state: ReduxStore) => state.modal.ProfileEditPopup);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragEnter, setDragEnter] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File>();
  const { firstName, lastName, email, phoneNumber, image } = profileFormData;

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setUploadedFile(Array.from(event.dataTransfer.files)[0]);
    setDragEnter(false);
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
              <img src={image} alt="profile-img" className={styles.Preview__img} />
            )}
          </div>
          <div className={styles.ProfileEdit__form}>
						<form noValidate className={styles.Form__container}>
							<TextField
								label='First name'
								variant="outlined"
								size='small'
								type="text"
                value={firstName}
                onChange={(e) => setProfileFormData({ ...profileFormData, firstName: e.target.value })}
							/>
							<TextField
								label='Last name'
								variant="outlined"
								size='small'
								type='text'
                value={lastName}
                onChange={(e) => setProfileFormData({ ...profileFormData, lastName: e.target.value })}
							/>
							<TextField
								label='Email'
								variant="outlined"
								size='small'
								type="email"
                value={email}
                onChange={(e) => setProfileFormData({ ...profileFormData, email: e.target.value })}
							/>
							<TextField
								label='Phone number'
								variant="outlined"
								size='small'
								type="tel"
                value={phoneNumber}
                onChange={(e) => setProfileFormData({ ...profileFormData, phoneNumber: e.target.value })}
							/>
						</form>
          </div>
					<div className={styles.Button__container}>
						<Button
              variant="contained"
              color="warning"
              onClick={() => {
                dispatch(setModal({ key: ModalKey.ProfileEditPopup, value: false }))
                setProfileFormData(initialFormData)
              }}
            >Cancel</Button>
						<Button variant="contained" color="success">Update</Button>
					</div>
        </div>
      </Dialog>
  )
}
