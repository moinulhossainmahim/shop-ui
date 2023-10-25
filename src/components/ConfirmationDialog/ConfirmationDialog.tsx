import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { RiDeleteBinLine } from 'react-icons/ri';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styles from './ConfirmationDialog.module.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../redux/store';
import { ModalKey, setModal } from '../../redux/reducers/modal';
import { SagaActions } from '../../redux/sagas/actions';

interface Props {
  name: string;
  id: string;
}

export default function AlertDialog({ name, id } : Props) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: ReduxStore) => state.modal.ConfirmationPopup);

  function handleDelete(name: string, id: string) {
    if(name === 'address') {
      dispatch({ type: SagaActions.DeleteAddress, payload: { id }});
    }
  }

  return (
    <div>
      <Dialog
        maxWidth="xs"
        fullWidth
        open={isOpen}
        onClose={() => dispatch(setModal({ key: ModalKey.ConfirmationPopup, value: false }))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className={styles.Dialog__content}>
          <Box className={styles.Delete}>
            <RiDeleteBinLine size={30} color="red" className={styles.Delete__icon} />
          </Box>
          <Typography variant='h6' fontWeight="bold" textAlign="center">Delete</Typography>
          <Typography variant='subtitle1' fontWeight="300" textAlign="center">Are you sure you want to delete?</Typography>
          <Box display="flex" gap={2} width="100%" mt={2}>
            <Button variant='contained' color='primary' size='large' className={styles.Cancel__btn} fullWidth onClick={() => dispatch(setModal({ key: ModalKey.ConfirmationPopup, value: false }))}>No</Button>
            <Button variant='contained' color='error' size='large' className={styles.Delete__btn} fullWidth onClick={() => handleDelete(name, id)}>Yes</Button>
          </Box>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
