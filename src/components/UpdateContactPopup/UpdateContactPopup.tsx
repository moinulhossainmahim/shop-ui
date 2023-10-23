import { Dispatch, SetStateAction } from 'react';
import Typography from '@mui/material/Typography';
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './UpdateContactPopup.module.scss';

interface Props {
  isOpen: boolean;
  contact: string;
  setContact: Dispatch<SetStateAction<string>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function UpdateContactPopup({ isOpen, contact, setContact, setIsOpen }: Props) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className={styles.AddressDialog}>
        <Typography variant='h5' fontWeight="bold" textAlign="center">Update Contact</Typography>
        <form noValidate className={styles.Checkout__form}>
          <TextField
            label='Contact'
            variant="outlined"
            size='small'
            value={contact}
            fullWidth
            onChange={(e) => setContact(e.target.value)}
          />
          <Button className={styles.Update__btn} size='large'>Update Contact</Button>
        </form>
      </div>
    </Dialog>
  );
}
