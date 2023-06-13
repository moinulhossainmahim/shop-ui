import { useState } from 'react';
import classNames from 'classnames';
import { orders } from './test-data';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import styles from './Orders.module.scss';

import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import OrderStatusChipButton from '../../components/OrderStatusChipButton';
import OrderStatusChip, { StatusType } from '../../components/OrderStatusChip/OrderStatusChip';

export default function Orders() {
  const [activeOrder, setActiveOrder] = useState(orders[0]);

  return (
    <div className={styles.OrdersPage}>
      <ProfileSidebar />
      <div className={styles.Orders}>
        <Typography p={1} variant='h6' fontWeight='bold'>My Orders</Typography>
        <Stack className={styles.Order__container}>
          <div className={styles.Order__container__orders}>
            {orders.map((order) => (
              <div
                key={order.id}
                className={classNames(styles.Order, {
                  [styles.Order__active]: activeOrder.id === order.id,
                })}
                onClick={() => setActiveOrder(order)}
              >
                <div className={styles.OrderStatus}>
                  <p className={styles.OrderStatus__p}>
                    <span className={styles.OrderStatus__title}>Order</span>
                    <span>#{order.orderNumber}</span>
                  </p>
                  <OrderStatusChipButton type={order.status} />
                </div>
                <Divider />
                <div className={styles.OrderStatusContent}>
                  <Typography variant='subtitle1' className={styles.OrderDetails__title}>
                    <span className={styles.OrderDetails__title__left}>Order Date</span>
                    <span>:</span>
                    <span className={styles.OrderDetails__title__right}>{order.date}</span>
                  </Typography>
                  <Typography variant='subtitle1' className={styles.OrderDetails__title}>
                    <span className={styles.OrderDetails__title__left}>Delivery Time</span>
                    <span>:</span>
                    <span className={styles.OrderDetails__title__right}>{order.deliveryTime}</span>
                  </Typography>
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
          <Typography variant='h6' py={2}>Order Details - 202306131822</Typography>
          <div className={styles.Order__status}>
            <Typography variant='subtitle1' fontWeight="bold">
              <span className={styles.Order__status__title}>Order Status: </span>
              <OrderStatusChip type={activeOrder.status} content='Order Processing' />
            </Typography>
            <Typography variant='subtitle1' fontWeight="bold">
              <span className={styles.Order__status__title}>Payment Status: </span>
              <OrderStatusChip type={StatusType.Completed} content='Cash On Delivery' />
            </Typography>
          </div>
          <div className={styles.Address__payment}>
            <div className={styles.Address}>
              <Typography variant='subtitle1' fontWeight="bold">Address</Typography>
              <Typography variant='body1' className={styles.Address__title}>2148 Straford Park, KY, Winchester, 40391, United States</Typography>
            </div>
            <div className={styles.Payment}>
              <Typography variant='subtitle1' className={styles.Payment__item}>
                <span>Sub Total</span>
                <span>$100.00</span>
              </Typography>
              <Typography variant='subtitle1' className={styles.Payment__item}>
                <span>Discount</span>
                <span>$0.00</span>
              </Typography>
              <Typography variant='subtitle1' className={styles.Payment__item}>
                <span>Delivery Fee</span>
                <span>$50.00</span>
              </Typography>
              <Typography variant='subtitle1' className={styles.Payment__item}>
                <span>Tax</span>
                <span>$2.00</span>
              </Typography>
              <Typography variant='subtitle1' fontWeight="bold" className={styles.Payment__item}>
                <span>Total</span>
                <span>$152.00</span>
              </Typography>
            </div>
          </div>
          <Divider />
      </div>
    </div>
  )
}
