import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { AiOutlineEye } from 'react-icons/ai';

import styles from './Orders.module.scss';

import OrderStatusChip from '../../components/OrderStatusChip/OrderStatusChip';
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import { SagaActions } from '../../redux/sagas/actions';
import { ReduxStore } from '../../redux/store';
import { INewOrder } from './types.d';
import { parseDate } from '../../utils/parseDate';
import { parseAddress } from '../../utils/parseAddress';
import PaymentStatusChip from '../../components/PaymentStatusChip';

export default function Orders() {
  const orders = useSelector((state: ReduxStore) => state.orders.orderResponse.content) as INewOrder[];
  const [activeOrder, setActiveOrder] = useState(orders[0]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SagaActions.FetchOrders });
  }, [])

  return (
    <div className={styles.OrdersPage}>
      <ProfileSidebar />
      {orders.length ? (
        <>
          <div className={styles.Orders}>
            <Typography p={1} variant='h6' fontWeight='bold'>My Orders</Typography>
            <Stack className={styles.Order__container}>
              <div className={styles.Order__container__orders}>
                {orders?.map((order) => (
                  <div
                  key={order.id}
                  className={classNames(styles.Order, {
                    [styles.Order__active]: activeOrder?.id === order?.id,
                  })}
                  onClick={() => setActiveOrder(order)}
                  >
                    <div className={styles.OrderStatus}>
                      <p className={styles.OrderStatus__p}>
                        <span className={styles.OrderStatus__title}>Order</span>
                        <span># {order.tracking_no}</span>
                      </p>
                      <OrderStatusChip type={order.order_status} />
                    </div>
                    <Divider />
                    <div className={styles.OrderStatusContent}>
                      <Typography variant='subtitle1' className={styles.OrderDetails__title}>
                        <span className={styles.OrderDetails__title__left}>Order Date</span>
                        <span>:</span>
                        <span className={styles.OrderDetails__title__right}>{parseDate(order.order_date)}</span>
                      </Typography>
                      {/* <Typography variant='subtitle1' className={styles.OrderDetails__title}>
                        <span className={styles.OrderDetails__title__left}>Delivery Time</span>
                        <span>:</span>
                        <span className={styles.OrderDetails__title__right}>{order.deliveryTime}</span>
                      </Typography> */}
                      <Typography variant='subtitle1' fontWeight="bold" className={styles.OrderDetails__title}>
                        <span className={styles.OrderDetails__title__left}>Amount</span>
                        <span>:</span>
                        <span className={styles.OrderDetails__title__right}>${order.amount}</span>
                      </Typography>
                      <Typography variant='subtitle1' fontWeight='bold' className={styles.OrderDetails__title}>
                        <span className={styles.OrderDetails__title__left}>Total Price</span>
                        <span>:</span>
                        <span className={styles.OrderDetails__title__right}>${order.total}</span>
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </Stack>
          </div>
          <div className={styles.OrderDetails}>
            <div>
              <div className={styles.Order__top}>
                <Typography variant='h6'>Order Details - {activeOrder.tracking_no}</Typography>
                <Button
                  className={styles.Details__btn}
                  variant='text'
                  startIcon={<AiOutlineEye />}
                  onClick={() => {
                    dispatch({ type: SagaActions.FetchOrder, payload: { id: activeOrder.id, navigation: navigate }})
                  }}
                >
                  Details
                </Button>
              </div>
              <div className={styles.Order__status}>
                <Typography variant='subtitle1' fontWeight="bold">
                  <span className={styles.Order__status__title}>Order Status: </span>
                  <OrderStatusChip type={activeOrder.order_status} />
                </Typography>
                <Typography variant='subtitle1' fontWeight="bold">
                  <span className={styles.Order__status__title}>Payment Status: </span>
                  <PaymentStatusChip type={activeOrder.payment_status} />
                </Typography>
              </div>
              <div className={styles.Address__payment}>
                <div className={styles.Address__container}>
                  <div className={styles.Address}>
                    <Typography variant='subtitle1' fontWeight="bold">Shipping Address</Typography>
                    <Typography variant='body1' className={styles.Address__title}>{parseAddress(activeOrder.shippingAddress)}</Typography>
                  </div>
                  <div className={styles.Address}>
                    <Typography variant='subtitle1' fontWeight="bold">Billing Address</Typography>
                    <Typography variant='body1' className={styles.Address__title}>{parseAddress(activeOrder.billingAddress)}</Typography>
                  </div>
                </div>
                <div className={styles.Payment}>
                  <Typography variant='subtitle1' className={styles.Payment__item}>
                    <span>Sub Total</span>
                    <span>${activeOrder.amount}</span>
                  </Typography>
                  <Typography variant='subtitle1' className={styles.Payment__item}>
                    <span>Discount</span>
                    <span>$0.00</span>
                  </Typography>
                  <Typography variant='subtitle1' className={styles.Payment__item}>
                    <span>Delivery Fee</span>
                    <span>${activeOrder.delivery_fee}</span>
                  </Typography>
                  <Typography variant='subtitle1' className={styles.Payment__item}>
                    <span>Tax</span>
                    <span>$0.00</span>
                  </Typography>
                  <Divider />
                  <Typography variant='subtitle1' fontWeight="bold" className={styles.Payment__item}>
                    <span>Total</span>
                    <span>${activeOrder.total}</span>
                  </Typography>
                </div>
              </div>
            </div>
            <TableContainer sx={{ maxHeight: 450 }} className={styles.TableContainer} component={Paper}>
              <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead className={styles.TableHead}>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell align='center'>Quantity</TableCell>
                    <TableCell align='center'>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {activeOrder?.orderItems.map((orderItem) => (
                    <TableRow className={styles.TableBody__row} key={orderItem.id}>
                      <TableCell className={styles.TableCell}>
                        <div className={styles.TableCell__product}>
                          <div>
                            <img  className={styles.TableCell__product__img} src={String(orderItem.product.featuredImg)} alt={orderItem.product.name} />
                          </div>
                          <div className={styles.TableCell__product__details}>
                            <span>{orderItem.product.name}</span>
                            <span className={styles.TableCell__product__details__price}>${orderItem.product.salePrice}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align='center'>{orderItem.quantity}</TableCell>
                      <TableCell align='center'>${(Number(orderItem.quantity) * Number(orderItem.product.salePrice)).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      ) : (
        <Stack className={styles.EmptyOrder__box} direction='column' gap={1}>
          <Typography variant='h6'>Empty order list</Typography>
          <Typography variant='subtitle1'>Make order to see order item</Typography>
          <Button className={styles.Back__btn} variant='contained' onClick={() => navigate('/')}>Back to Products</Button>
        </Stack>
      )}
    </div>
  )
}
