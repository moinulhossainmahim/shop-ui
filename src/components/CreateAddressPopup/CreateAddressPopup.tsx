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

import styles from './CreateAddressPopup.module.scss';
import { IAddressFormData } from '../../pages/Checkout/types';

interface Props {
  isOpen: boolean;
  type: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: IAddressFormData;
  setFormData: React.Dispatch<React.SetStateAction<IAddressFormData>>;
}

export default function ProductDetailsPopup({ isOpen, type, setFormData, setIsOpen, formData } : Props) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className={styles.AddressDialog}>
        <Typography variant='h5' fontWeight="bold" textAlign="center">Add New Address</Typography>
        <form noValidate className={styles.Checkout__form}>
          <TextField
            type='text'
            label='Title'
            variant="outlined"
            size='medium'
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          />
          <TextField
            type='text'
            label='City'
            variant="outlined"
            size='medium'
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <div className={styles.InpputIn__row}>
            <TextField
              type='text'
              label='State'
              variant="outlined"
              size='medium'
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className={styles.InpputIn__row__textfield}
            />
            <TextField
              type='text'
              label='Zip'
              variant="outlined"
              size='medium'
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              className={styles.InpputIn__row__textfield}
            />
          </div>
          <TextField
            type='text'
            label='Street'
            variant="outlined"
            size='medium'
            value={formData.street}
            onChange={(e) => setFormData({ ...formData, street: e.target.value })}
            className={styles.InpputIn__row__textfield}
            fullWidth
          />
          <Button className={styles.Update__btn} size='large'>Update Address</Button>
        </form>
      </div>
    </Dialog>
  );
}
