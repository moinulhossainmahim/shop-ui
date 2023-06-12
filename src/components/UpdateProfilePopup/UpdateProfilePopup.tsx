import { useRef, useState } from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import classNames from "classnames";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";

import styles from './UpdateProfilePopup.module.scss';

interface Props {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UpdateProfilePopup({ isEditing, setIsEditing } : Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragEnter, setDragEnter] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File>();

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setUploadedFile(Array.from(event.dataTransfer.files)[0]);
    setDragEnter(false);
  }

  return (
    <Dialog
        fullWidth={true}
        maxWidth='xs'
        open={isEditing}
        onClose={() => setIsEditing(false)}
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
          <div className={styles.ProfileEdit__form}>
						<form noValidate className={styles.Form__container}>
							<TextField
								label='First name'
								variant="outlined"
								size='small'
								type="text"
							/>
							<TextField
								label='Last name'
								variant="outlined"
								size='small'
								type='text'
							/>
							<TextField
								label='Email'
								variant="outlined"
								size='small'
								type="email"
							/>
							<TextField
								label='Phone number'
								variant="outlined"
								size='small'
								type="tel"
							/>
						</form>
          </div>
					<div className={styles.Button__container}>
						<Button variant="contained" color="warning" onClick={() => setIsEditing(false)}>Cancel</Button>
						<Button variant="contained" color="success">Update</Button>
					</div>
        </div>
      </Dialog>
  )
}
