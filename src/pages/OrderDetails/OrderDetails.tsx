import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { AiOutlineHome } from 'react-icons/ai';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Box from '@mui/material/Box';

import styles from './OrderDetails.module.scss';

import OrderStatusChip from "../../components/OrderStatusChip";
import OrderStatusStepper from "../../components/OrderStatusStepper";
import { ReduxStore } from "../../redux/store";
import { parseDate } from "../../utils/parseDate";
import PaymentStatusChip from "../../components/PaymentStatusChip";
import { PaymentMethod } from "../Orders/types.d";

export default function OrderDetails() {
  const navigate = useNavigate();
  const order = useSelector((state: ReduxStore) => state.orders.orderResponse.order);
  const user = useSelector((state: ReduxStore) => state.auth.user);

  return (
    <div className={styles.OrderDetails__page}>
      <div className={styles.BackToHome__div}>
        <Button className={styles.BackToHome__btn} variant="text" startIcon={<AiOutlineHome />} onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </div>
      <div className={styles.OrderDetails}>
        <div className={styles.Order__status}>
          <Typography variant='subtitle1' fontWeight="bold">
            <span className={styles.Order__status__title}>Order Status: </span>
            <OrderStatusChip type={order.order_status} />
          </Typography>
          <Typography variant='subtitle1' fontWeight="bold">
            <span className={styles.Order__status__title}>Payment Status: </span>
            <PaymentStatusChip type={order.payment_status} />
          </Typography>
        </div>
        <div className={styles.OrderDetails__bottom}>
          <Box className={styles.Order__cards}>
            <Box className={styles.Card}>
              <Typography variant="subtitle1" fontWeight="bold" className={styles.Card__heading}>Order Number</Typography>
              <Typography variant="subtitle2" className={styles.Card__value}>{order.tracking_no}</Typography>
            </Box>
            <Box className={styles.Card}>
              <Typography variant="subtitle1" fontWeight="bold" className={styles.Card__heading}>Date</Typography>
              <Typography variant="subtitle2" className={styles.Card__value}>{parseDate(order.order_date || Date.now().toString())}</Typography>
            </Box>
            <Box className={styles.Card}>
              <Typography variant="subtitle1" fontWeight="bold" className={styles.Card__heading}>Total</Typography>
              <Typography variant="subtitle2" className={styles.Card__value}>${order.total}</Typography>
            </Box>
            <Box className={styles.Card}>
              <Typography variant="subtitle1" fontWeight="bold" className={styles.Card__heading}>Payment Method</Typography>
              <Typography variant="subtitle2" className={styles.Card__value}>{order.payment_method === PaymentMethod.Cashon ? 'Cash on' : 'Online'}</Typography>
            </Box>
          </Box>
          <Box>
            <OrderStatusStepper activeStatus={order.order_status} />
          </Box>
          <div className={styles.Address__payment}>
            <div className={styles.Payment}>
              <Typography variant="h5" fontWeight="bold" mb={2}>Total Amount</Typography>
              <div>
                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Sub Total</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>${order.amount}</span>
                </p>

                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Delivery Charge</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>$0.00</span>
                </p>

                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Tax</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>$0.00</span>
                </p>

                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Discount</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>$000</span>
                </p>

                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Total</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>${order.total}</span>
                </p>
              </div>
            </div>
            <div className={styles.Address}>
              <Typography variant="h5" fontWeight="bold" mb={4}>Order Details</Typography>
              <div>
                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Name</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>{user.fullName}</span>
                </p>

                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Total Item</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>{order.orderItems.length} Item</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <TableContainer sx={{ maxHeight: 450, boxShadow: 'none' }} className={styles.TableContainer} component={Paper}>
          <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgb(243,244,246)' }}>
                <TableCell sx={{ backgroundColor: 'inherit' }}>Item</TableCell>
                <TableCell align='center' sx={{ backgroundColor: 'inherit' }}>Quantity</TableCell>
                <TableCell align='center' sx={{ backgroundColor: 'inherit' }}>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.orderItems.map((orderItem) => (
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
                  <TableCell align='center'>${(Number(orderItem.quantity) * Number(orderItem.product.salePrice)).toFixed()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
