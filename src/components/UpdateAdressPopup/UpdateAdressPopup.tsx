import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './UpdateAdressPopup.module.scss';

import { IAddressFormData } from '../../pages/Checkout/types';

interface Props {
  isEditing: boolean;
  setIsEditng: React.Dispatch<React.SetStateAction<boolean>>;
  editingAddress: IAddressFormData;
  setEditingAddress: React.Dispatch<React.SetStateAction<IAddressFormData>>;
}

export default function ProductDetailsPopup({ isEditing, setIsEditng, editingAddress, setEditingAddress } : Props) {
  return (
    <Dialog
      open={isEditing}
      onClose={() => setIsEditng(false)}
    >
      <div className={styles.AddressDialog}>
        <Typography variant='h5' fontWeight="bold" textAlign="center">Update Address</Typography>
        <form noValidate className={styles.Checkout__form}>
          <TextField
            type='text'
            label='Title'
            variant="outlined"
            size='medium'
            value={editingAddress.title}
            onChange={(e) => setEditingAddress({ ...editingAddress, title: e.target.value })}
          />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={editingAddress.type}
              onChange={(e) => setEditingAddress({ ...editingAddress, type: e.target.value })}
            >
              <FormControlLabel value="billing" control={<Radio />} label="Billing" />
              <FormControlLabel value="shipping" control={<Radio />} label="Shipping" />
            </RadioGroup>
          </FormControl>
          <TextField
            type='text'
            label='Country'
            variant="outlined"
            size='medium'
            value={editingAddress.country}
            onChange={(e) => setEditingAddress({ ...editingAddress, country: e.target.value })}
          />
          <TextField
            type='text'
            label='City'
            variant="outlined"
            size='medium'
            value={editingAddress.city}
            onChange={(e) => setEditingAddress({ ...editingAddress, city: e.target.value })}
          />
          <div className={styles.InpputIn__row}>
            <TextField
              type='text'
              label='State'
              variant="outlined"
              size='medium'
              value={editingAddress.state}
              onChange={(e) => setEditingAddress({ ...editingAddress, state: e.target.value })}
              className={styles.InpputIn__row__textfield}
            />
            <TextField
              type='text'
              label='Zip'
              variant="outlined"
              size='medium'
              value={editingAddress.zip}
              onChange={(e) => setEditingAddress({ ...editingAddress, zip: e.target.value })}
              className={styles.InpputIn__row__textfield}
            />
          </div>
          <TextField
            type='text'
            label='Street'
            variant="outlined"
            size='medium'
            value={editingAddress.street}
            onChange={(e) => setEditingAddress({ ...editingAddress, street: e.target.value })}
            className={styles.InpputIn__row__textfield}
            fullWidth
          />
          <Button className={styles.Update__btn} size='large'>Update Address</Button>
        </form>
      </div>
    </Dialog>
  );
}
