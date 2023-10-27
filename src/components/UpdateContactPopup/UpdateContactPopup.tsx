import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './UpdateContactPopup.module.scss';
import { ReduxStore } from '../../redux/store';
import { SagaActions } from '../../redux/sagas/actions';
import { ModalKey, setModal } from '../../redux/reducers/modal';

interface Props {
  contact: string;
}

export default function UpdateContactPopup({ contact }: Props) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(contact);
  const { id } = useSelector((state: ReduxStore) => state.auth.user);
  const isOpen = useSelector((state: ReduxStore) => state.modal.UpdateContactPopup);

  function handleUpdateContact() {
    if(value === contact) {
      toast.error('contact is unchanged');
    } else {
      const formData = new FormData();
      formData.append('contact', value);
      dispatch({ type: SagaActions.UpdateProfile, payload: { id,  formData }});
      dispatch(setModal({ key: ModalKey.UpdateContactPopup, value: false }))
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(setModal({ key: ModalKey.UpdateContactPopup, value: false }))}
    >
      <div className={styles.AddressDialog}>
        <Typography variant='h5' fontWeight="bold" textAlign="center">Update Contact</Typography>
        <form noValidate className={styles.Checkout__form}>
          <TextField
            label='Contact'
            variant="outlined"
            size='small'
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            className={styles.Update__btn}
            size='large'
            disabled={(contact === value)}
            onClick={handleUpdateContact}
          >Update Contact</Button>
        </form>
      </div>
    </Dialog>
  );
}
