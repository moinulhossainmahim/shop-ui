import { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { MdModeEdit } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { TextareaAutosize } from "@mui/material";

import styles from './Checkout.module.scss';

import { ReduxStore } from "../../redux/store";
import useGetCartTotal from "../../hooks/useGetCartTotal";
import CreateAddressPopup from "../../components/CreateAddressPopup";
import { IAddressFormData } from "./types";
import ConfirmationDialog from "../../components/ConfirmationDialog";
import UpdateContactPopup from "../../components/UpdateContactPopup";
import UpdateAdressPopup from "../../components/UpdateAdressPopup";

export default function Checkout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  const [openType, setOpenType] = useState('');
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [contact, setContact] = useState('+8801732748262');
  const [isEditing, setIsEditing] = useState(false);
  const [editingAddress, setEditingAddress] = useState<IAddressFormData>({
    type: '',
    title: '',
    country: '',
    state: '',
    zip: '',
    city: '',
    street: '',
  });
  const [formData, setFormData] = useState<IAddressFormData>({
    type: '',
    title: '',
    country: '',
    state: '',
    zip: '',
    city: '',
    street: '',
  })
  const cartItems = useSelector((state: ReduxStore) => state.cart.cartProducts);
  const { totalPrice } = useGetCartTotal();

  function handleCreateAddress(type: string) {
    setIsOpen(true);
    setOpenType(type);
  }

  return (
    <>
      <Box className={styles.Checkout__container}>
        <Box className={styles.Checkout__content}>
          <Stack className={styles.CheckoutForm__container}>
            <Box className={styles.Contact__container}>
              <Box className={styles.Contact__container__top}>
                <Box className={styles.Contact__top__left}>
                  <Box className={styles.Number}>1</Box>
                  <Typography variant="h5">Contact Number</Typography>
                </Box>
                <Button className={styles.UpdateBtn} onClick={() => setIsContactPopupOpen(true)}>+ Update</Button>
              </Box>
              <TextField
                variant="outlined"
                size='small'
                className={styles.InpputIn__row__textfield}
                value={contact}
                fullWidth
                disabled
              />
            </Box>

            <Box className={styles.Contact__container}>
              <Box className={styles.Contact__container__top}>
                <Box className={styles.Contact__top__left}>
                  <Box className={styles.Number}>2</Box>
                  <Typography variant="h5">Billing Address</Typography>
                </Box>
                <Button className={styles.UpdateBtn} onClick={() => handleCreateAddress('billing')}>+ Add</Button>
              </Box>
              <Stack className={styles.Address__container}>
                <Box className={styles.Address}>
                  <Box className={styles.Address__top}>
                    <Typography variant="subtitle2" fontWeight="bold">Test title</Typography>
                    <Box className={styles.Btn__container}>
                      <IconButton aria-label="delete" className={styles.Btn}>
                        <MdModeEdit className={styles.Edit__btn} />
                      </IconButton>
                      <IconButton aria-label="delete" className={styles.Btn}>
                        <RxCross2 className={styles.Delete__btn} onClick={() => setIsOpenConfirmation(true)}/>
                      </IconButton>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" padding="10px 0px">Iraq, NCR, Parañaque, 1709, Philippines</Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>

            <Box className={styles.Contact__container}>
              <Box className={styles.Contact__container__top}>
                <Box className={styles.Contact__top__left}>
                  <Box className={styles.Number}>3</Box>
                  <Typography variant="h5">Shipping Address</Typography>
                </Box>
                <Button className={styles.UpdateBtn} onClick={() => handleCreateAddress('shipping')}>+ Add</Button>
              </Box>
              <Stack className={styles.Address__container}>
                <Box className={styles.Address}>
                  <Box className={styles.Address__top}>
                    <Typography variant="subtitle2" fontWeight="bold">Test title</Typography>
                    <Box className={styles.Btn__container}>
                      <IconButton aria-label="delete" className={styles.Btn}>
                        <MdModeEdit className={styles.Edit__btn} />
                      </IconButton>
                      <IconButton aria-label="delete" className={styles.Btn}>
                        <RxCross2 className={styles.Delete__btn} onClick={() => setIsOpenConfirmation(true)}/>
                      </IconButton>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" padding="10px 0px">Iraq, NCR, Parañaque, 1709, Philippines</Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>

            <Box className={styles.Contact__container}>
              <Box className={styles.Contact__container__top}>
                <Box className={styles.Contact__top__left}>
                  <Box className={styles.Number}>4</Box>
                  <Typography variant="h5">Order Note</Typography>
                </Box>
              </Box>
              <Stack className={styles.Address__container}>
                <TextareaAutosize placeholder="Order Notes" minRows={8} className={styles.Notes} />
              </Stack>
            </Box>

          </Stack>
          <Stack className={styles.CheckoutOrder__container}>
            <div className={styles.Order}>
              <div className={styles.Product__container}>
                {cartItems.map((cartItem) => (
                  <>
                    <Stack direction="row" className={styles.Product}>
                      <div className={styles.Product__left}>
                        <div>
                          <img className={styles.Product__img} src={cartItem.img} alt="cart-img1" />
                        </div>
                        <div className={styles.Product__details}>
                          <Typography variant="subtitle1" fontWeight='bold'>{cartItem.name}</Typography>
                          <Typography variant="body2">{cartItem.amount} x {cartItem.discountPrice}</Typography>
                        </div>
                      </div>
                      <div className={styles.Product__right}>
                        <Typography variant="subtitle1" fontWeight='bold'>${(Number(cartItem.discountPrice.slice(1)) * cartItem.amount).toFixed(2)}</Typography>
                      </div>
                    </Stack>
                  </>
                ))}
              </div>
              <div>
                <Typography variant="subtitle1" className={styles.Price}>
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </Typography>
                <Typography variant="subtitle1" className={styles.Price}>
                  <span>Discout</span>
                  <span>$0.00</span>
                </Typography>
                <Typography variant="subtitle1" className={styles.Price}>
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </Typography>
              </div>
              <Button variant="contained" className={styles.Order__btn}>Place Order</Button>
            </div>
          </Stack>
        </Box>
      </Box>
      <UpdateContactPopup isOpen={isContactPopupOpen} setContact={setContact} setIsOpen={setIsContactPopupOpen} contact={contact} />
      <CreateAddressPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type={openType}
        formData={formData}
        setFormData={setFormData}
      />
      <UpdateAdressPopup
        isEditing={isEditing}
        setIsEditng={setIsEditing}
        editingAddress={editingAddress}
        setEditingAddress={setEditingAddress}
      />
      <ConfirmationDialog isOpen={isOpenConfirmation} setIsOpen={setIsOpenConfirmation} />
    </>
  )
}
