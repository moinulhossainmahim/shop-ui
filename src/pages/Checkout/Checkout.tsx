import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { MdModeEdit } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { BsBagXFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { TextareaAutosize } from "@mui/material";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { FaStripe } from "react-icons/fa";

import styles from './Checkout.module.scss';

import { ReduxStore } from "../../redux/store";
import useGetCartTotal from "../../hooks/useGetCartTotal";
import CreateAddressPopup from "../../components/CreateAddressPopup";
import { IAddressFormData, ICreateOrderItem, IOrderData } from "./types";
import ConfirmationDialog from "../../components/ConfirmationDialog";
import UpdateContactPopup from "../../components/UpdateContactPopup";
import UpdateAdressPopup from "../../components/UpdateAdressPopup";
import { ModalKey, setModal } from "../../redux/reducers/modal";
import { parseAddress } from "../../utils/parseAddress";
import { toggleQuantity } from "../../redux/reducers/cart";
import { ProductToggleType } from "../../components/Cart/types.d";
import { AddressType, IBillingAddress, IShippingAddress, PaymentMethod, PaymentStatus } from "../Orders/types.d";
import { StatusType } from "../../components/OrderStatusChip/OrderStatusChip";
import { SagaActions } from "../../redux/sagas/actions";

export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalPrice } = useGetCartTotal();
  const [openType, setOpenType] = useState('');
  const [activeBillingAddress, setActiveBillingAddress] = useState<IBillingAddress | null>();
  const [activeShippingAddress, setActiveShippingAddress] = useState<IShippingAddress | null>();
  const [activeAddressID, setActiveAddressID] = useState('');
  const [activePaymentMethod, setActivePaymentMethod] = useState('cashon')
  const [editingAddress, setEditingAddress] = useState<IAddressFormData>({
    addressType: '',
    title: '',
    country: '',
    state: '',
    zip: '',
    city: '',
    streetAddress: '',
  });
  const [formData, setFormData] = useState<IAddressFormData>({
    addressType: '',
    title: '',
    country: '',
    state: '',
    zip: '',
    city: '',
    streetAddress: '',
  })
  const user = useSelector((state: ReduxStore) => state.auth.user);
  const cartItems = useSelector((state: ReduxStore) => state.cart.cartProducts);
  const isAvailable = useSelector((state: ReduxStore) => state.orders.orderResponse.isAvailable);
  const isLoading = useSelector((state: ReduxStore) => state.loader.CheckOrderAvailability);

  function togglePaymentMethod(method: string) {
    setActivePaymentMethod(method);
  }

  function handleCreateOrder() {
    const orderItems: ICreateOrderItem[] = cartItems.map((cartItem) => {
      return {
        productId: cartItem.id,
        quantity: cartItem.amount,
        subtotal: Number((cartItem.amount * Number(cartItem.salePrice)).toFixed(2)),
        unit_price: Number(cartItem.salePrice),
      }
    })
    if (activeBillingAddress && activeShippingAddress && cartItems.length) {
      const orderData: IOrderData = {
        order_status: StatusType.Pending,
        delivery_fee: 0,
        amount: totalPrice,
        total: totalPrice,
        payment_method: PaymentMethod.Cashon,
        payment_status: PaymentStatus.Pending,
        shippingAddress: activeShippingAddress,
        billingAddress: activeBillingAddress,
        orderItems,
      }
      dispatch({ type: SagaActions.CreateOrder, payload: { orderData, navigation: navigate }})
    }
  }

  const handleCheckAvailabilityClick = () => {
    const items = cartItems.map((item) => {
      return {
        productId: item.id,
        quantity: item.amount,
      }
    })
    dispatch({ type: SagaActions.CheckOrderAvailability, payload: { items }});
  }

  useEffect(() => {
    const foundBillingAddress = user.address.find((addr) => addr.addressType === AddressType.Billing) as IBillingAddress || null;
    const foundShippingAddress = user.address.find((addr) => addr.addressType === AddressType.Shipping) as IShippingAddress || null;
    setActiveBillingAddress(foundBillingAddress);
    setActiveShippingAddress(foundShippingAddress);
  }, [])

  return (
    <>
      <Box className={styles.Checkout__container}>
        <div className={styles.BackToHome__div}>
          <Button className={styles.BackToHome__btn} variant="text" startIcon={<AiOutlineHome />} onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
        <Box className={styles.Checkout__content}>
          <Stack className={styles.CheckoutForm__container}>
            <Box className={styles.Contact__container}>
              <Box className={styles.Contact__container__top}>
                <Box className={styles.Contact__top__left}>
                  <Box className={styles.Number}>1</Box>
                  <Typography variant="h5">Contact Number</Typography>
                </Box>
                <Button className={styles.UpdateBtn} onClick={() => dispatch(setModal({ key: ModalKey.UpdateContactPopup, value: true }))}>+ Update</Button>
              </Box>
              <TextField
                variant="outlined"
                size='small'
                className={styles.InpputIn__row__textfield}
                value={user.contact}
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
                <Button className={styles.UpdateBtn} onClick={() => {
                  setOpenType('billing')
                  dispatch(setModal({ key: ModalKey.CreateAddressPopup, value: true }))
                }}>
                  + Add
                </Button>
              </Box>
              <Stack className={styles.Address__container} direction='row'>
                {user.address.map((addr) => {
                  if(addr.addressType === 'billing') {
                    return (
                    <Box
                      key={addr.id}
                      className={classNames(styles.Address, {
                        [styles.Address__active]: activeBillingAddress?.id === addr.id
                      })}
                      onClick={() => setActiveBillingAddress(addr as IBillingAddress)}
                    >
                      <Box className={styles.Address__top}>
                        <Typography variant="subtitle2" fontWeight="bold">{addr.title}</Typography>
                        <Box className={styles.Btn__container}>
                          <IconButton
                            aria-label="delete"
                            className={styles.Btn}
                            onClick={() => {
                              setEditingAddress(addr);
                              dispatch(setModal({ key: ModalKey.UpdateAddressPopup, value: true }));
                            }}
                          >
                            <MdModeEdit className={styles.Edit__btn} />
                          </IconButton>
                          <IconButton aria-label="delete" className={styles.Btn} onClick={() => {
                            setActiveAddressID(addr.id)
                            dispatch(setModal({ key: ModalKey.ConfirmationPopup, value: true }))
                          }}>
                            <RxCross2 className={styles.Delete__btn}/>
                          </IconButton>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" padding="10px 0px">{parseAddress(addr)}</Typography>
                      </Box>
                    </Box>
                    )
                  } else {
                    return null;
                  }
                })}
              </Stack>
            </Box>

            <Box className={styles.Contact__container}>
              <Box className={styles.Contact__container__top}>
                <Box className={styles.Contact__top__left}>
                  <Box className={styles.Number}>3</Box>
                  <Typography variant="h5">Shipping Address</Typography>
                </Box>
                <Button className={styles.UpdateBtn} onClick={() => {
                  setOpenType('shipping')
                  dispatch(setModal({ key: ModalKey.CreateAddressPopup, value: true }))
                }}>
                  + Add
                </Button>
              </Box>
              <Stack className={styles.Address__container} direction='row'>
                {user.address.map((addr) => {
                  if(addr.addressType === 'shipping') {
                    return (
                    <Box
                      key={addr.id}
                      className={classNames(styles.Address, {
                        [styles.Address__active]: activeShippingAddress?.id === addr.id
                      })}
                      onClick={() => setActiveShippingAddress(addr as IShippingAddress)}
                    >
                      <Box className={styles.Address__top}>
                        <Typography variant="subtitle2" fontWeight="bold">{addr.title}</Typography>
                        <Box className={styles.Btn__container}>
                          <IconButton
                            aria-label="delete"
                            className={styles.Btn}
                            onClick={() => {
                              setEditingAddress(addr);
                              dispatch(setModal({ key: ModalKey.UpdateAddressPopup, value: true }));
                            }}
                          >
                            <MdModeEdit className={styles.Edit__btn} />
                          </IconButton>
                          <IconButton aria-label="delete" className={styles.Btn} onClick={() => {
                            setActiveAddressID(addr.id)
                            dispatch(setModal({ key: ModalKey.ConfirmationPopup, value: true }))
                          }}>
                            <RxCross2 className={styles.Delete__btn}/>
                          </IconButton>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" padding="10px 0px">{parseAddress(addr)}</Typography>
                      </Box>
                    </Box>
                    )
                  } else {
                    return null;
                  }
                })}
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
                {cartItems.length > 0 ? (
                  <>
                    {cartItems.map((cartItem) => (
                      <Stack direction="row" className={styles.Product} key={cartItem.id}>
                        <div className={styles.Product__left}>
                        <div className={styles.Product__amount}>
                          <button
                            className={styles.ProductAmount__btn}
                            disabled={cartItem.quantity === cartItem.amount}
                            onClick={() => dispatch(toggleQuantity({ type: ProductToggleType.INCREMENT, id: cartItem.id }))}
                          >
                            <HiPlusSm />
                          </button>
                          <span>{cartItem.amount}</span>
                          <button
                            className={styles.ProductAmount__btn}
                            onClick={() => dispatch(toggleQuantity({ type: ProductToggleType.DECREMENT, id: cartItem.id }))}
                          >
                            <HiMinusSm />
                          </button>
                        </div>
                          <div>
                            <img className={styles.Product__img} src={String(cartItem.featuredImg)} alt="cart-img1" />
                          </div>
                          <div className={styles.Product__details}>
                            <Typography variant="subtitle1" fontWeight='bold'>{cartItem.name}</Typography>
                            <Typography variant="body2">{cartItem.amount} x {cartItem.salePrice}</Typography>
                          </div>
                        </div>
                        <div className={styles.Product__right}>
                          <Typography variant="subtitle1" fontWeight='bold'>${(Number(cartItem.salePrice) * cartItem.amount).toFixed(2)}</Typography>
                        </div>
                      </Stack>
                    ))}
                  </>
                ) : (
                  <Stack className={styles.Empty__cart}>
                    <BsBagXFill className={styles.Empty__bag} />
                    <Typography variant="h5">No products found</Typography>
                    <Typography variant="subtitle1">Add products to cart</Typography>
                  </Stack>
                )}
              </div>
              <div>
                <Typography variant="subtitle1" className={styles.Price}>
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </Typography>
                <Typography variant="subtitle1" className={styles.Price}>
                  <span>Discount</span>
                  <span>$0.00</span>
                </Typography>
                <Typography variant="subtitle1" className={styles.Price}>
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </Typography>
                <Stack direction='column' gap={3} mt={2}>
                  <Typography variant="subtitle1" fontWeight='bold'>Choose Payment Method</Typography>
                  <Box className={styles.Payment__methods}>
                    <Box
                      className={classNames(styles.Payment__method, {
                        [styles.Payment__method__active]: activePaymentMethod === 'cashon',
                      })}
                      onClick={() => togglePaymentMethod('cashon')}>
                      <Typography variant="subtitle1" fontSize='small' fontWeight='bold'>Cash On Delivery</Typography>
                    </Box>
                    <Box
                      className={classNames(styles.Payment__method, {
                        [styles.Payment__method__active]: activePaymentMethod === 'stripe',
                      })}
                      onClick={() => togglePaymentMethod('stripe')}>
                      <FaStripe size={30} className={styles.Stripe__icon} />
                    </Box>
                  </Box>
                </Stack>
              </div>
              {!isLoading && isAvailable && activePaymentMethod === 'cashon' ? (
                <Button
                  variant="contained"
                  size="large"
                  className={styles.Order__btn}
                  disabled={!cartItems.length || !activeBillingAddress || !activeShippingAddress}
                  onClick={handleCreateOrder}
                >Place Order</Button>
              ) : null}
              {!isLoading && isAvailable && activePaymentMethod === 'stripe' ? (
                <Button
                  variant="contained"
                  size="large"
                  className={styles.Order__btn}
                >Click to pay</Button>
              ) : null}
              {!isLoading && !isAvailable ? (
                <Button
                  variant="contained"
                  size="large"
                  className={styles.Order__btn}
                  disabled={!cartItems.length || !activeBillingAddress || !activeShippingAddress}
                  onClick={handleCheckAvailabilityClick}
                >Check Availability</Button>
              ): null}
              {/* <Button
                variant="contained"
                size="large"
                className={styles.Order__btn}
                disabled={!cartItems.length || !activeBillingAddress || !activeShippingAddress}
                onClick={handleCheckAvailabilityClick}
              >Check Availability</Button> */}
              {!activeBillingAddress || !activeShippingAddress || !user.contact && (
                <Typography variant="body2" color='red'>Add contact no, shipping and billing address to make an order</Typography>
              )}
            </div>
          </Stack>
        </Box>
      </Box>
      <UpdateContactPopup contact={user.contact} />
      <CreateAddressPopup type={openType} formData={formData} setFormData={setFormData} />
      <UpdateAdressPopup editingAddress={editingAddress} setEditingAddress={setEditingAddress} />
      <ConfirmationDialog name="address" id={activeAddressID} />
    </>
  )
}
