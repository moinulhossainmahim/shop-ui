import { Dispatch, SetStateAction } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { RiDeleteBinLine } from 'react-icons/ri';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styles from './ConfirmationDialog.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function AlertDialog({ isOpen, setIsOpen } : Props) {
  // function handleDelete(name: string, id: string) {
  //   if(name === 'categories') {
  //     dispatch({ type: SagaActions.DeleteCategory, payload: { id } });
  //     setIsOpen(false);
  //   } else if(name === 'subCategory') {
  //     dispatch({ type: SagaActions.DeleteSubCategory, payload: { id } });
  //     setIsOpen(false);
  //   } else if(name === 'products') {
  //     dispatch({ type: SagaActions.DeleteProduct, payload: { id }});
  //     setIsOpen(false);
  //   }
  // }

  return (
    <div>
      <Dialog
        maxWidth="xs"
        fullWidth
        open={isOpen}
        onClose={() => setIsOpen(false)}
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
            <Button variant='contained' color='primary' size='large' className={styles.Cancel__btn} fullWidth onClick={() => setIsOpen(false)}>No</Button>
            <Button variant='contained' color='error' size='large' className={styles.Delete__btn} fullWidth onClick={() => setIsOpen(false)}>Yes</Button>
          </Box>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
