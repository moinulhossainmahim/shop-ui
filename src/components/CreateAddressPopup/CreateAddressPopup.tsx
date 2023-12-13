import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import styles from './CreateAddressPopup.module.scss';

import { IAddressFormData } from '../../pages/Checkout/types';
import { SagaActions } from '../../redux/sagas/actions';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../redux/store';
import { ModalKey, setModal } from '../../redux/reducers/modal';

interface Props {
  type?: string;
  formData: IAddressFormData;
  setFormData: React.Dispatch<React.SetStateAction<IAddressFormData>>;
}

export default function ProductDetailsPopup({ type, setFormData, formData } : Props) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: ReduxStore) => state.modal.CreateAddressPopup);

  function handleCreateAddress() {
    dispatch({ type: SagaActions.CreateAddress, payload: formData });
    setFormData({
      title: '',
      addressType: type || '',
      country: '',
      state: '',
      city: '',
      zip: '',
      streetAddress: '',
    })
  }

  useEffect(() => {
    setFormData({ ...formData, addressType: type ? type : 'shipping' })
  }, [type])

  return (
    <Dialog
      maxWidth='xs'
      fullWidth
      open={isOpen}
      onClose={() => dispatch(setModal({ key: ModalKey.CreateAddressPopup, value: false }))}
    >
      <div className={styles.AddressDialog}>
        <Typography variant='h5' fontWeight="bold" textAlign="center">Add New Address</Typography>
        <form noValidate className={styles.Checkout__form}>
          <TextField
            type='text'
            label='Title'
            variant="outlined"
            size='small'
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={formData.addressType}
              onChange={(e) => setFormData({ ...formData, addressType: e.target.value })}
            >
              <FormControlLabel value="billing" control={<Radio />} label="Billing" />
              <FormControlLabel value="shipping" control={<Radio />} label="Shipping" />
            </RadioGroup>
          </FormControl>
          <TextField
            type='text'
            label='Country'
            variant="outlined"
            size='small'
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          />
          <TextField
            type='text'
            label='City'
            variant="outlined"
            size='small'
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <Box className={styles.InpputIn__row} sx={{ flexDirection: { xs: 'column', sm: 'row' }}}>
            <TextField
              type='text'
              label='State'
              variant="outlined"
              size='small'
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className={styles.InpputIn__row__textfield}
              sx={{ width: { xs: '100%', sm: '50%' }}}
            />
            <TextField
              type='text'
              label='Zip'
              variant="outlined"
              size='small'
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              className={styles.InpputIn__row__textfield}
              sx={{ width: { xs: '100%', sm: '50%' }}}
            />
          </Box>
          <TextField
            type='text'
            label='Street'
            variant="outlined"
            size='small'
            value={formData.streetAddress}
            onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
            className={styles.InpputIn__row__textfield}
            fullWidth
          />
          <Button className={styles.Update__btn} size='large' onClick={handleCreateAddress}>Create Address</Button>
        </form>
      </div>
    </Dialog>
  );
}
