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
import { StatusType } from "../../components/OrderStatusChip/OrderStatusChip";

export default function OrderDetails() {
  const navigate = useNavigate();

  return (
    <div className={styles.OrderDetails__page}>
      <div className={styles.BackToHome__div}>
        <Button className={styles.BackToHome__btn} variant="text" startIcon={<AiOutlineHome onClick={() => navigate('/')} />}>
          Back to Home
        </Button>
      </div>
      <div className={styles.OrderDetails}>
        <div className={styles.Order__status}>
          <Typography variant='subtitle1' fontWeight="bold">
            <span className={styles.Order__status__title}>Order Status: </span>
            <OrderStatusChip type={StatusType.Processing} />
          </Typography>
          <Typography variant='subtitle1' fontWeight="bold">
            <span className={styles.Order__status__title}>Payment Status: </span>
            <OrderStatusChip type={StatusType.Completed} content='Cash On Delivery' />
          </Typography>
        </div>
        <div className={styles.OrderDetails__bottom}>
          <Box className={styles.Order__cards}>
            <Box className={styles.Card}>
              <Typography variant="subtitle1" fontWeight="bold" className={styles.Card__heading}>Order Number</Typography>
              <Typography variant="subtitle2" className={styles.Card__value}>20234552134</Typography>
            </Box>
            <Box className={styles.Card}>
              <Typography variant="subtitle1" fontWeight="bold" className={styles.Card__heading}>Date</Typography>
              <Typography variant="subtitle2" className={styles.Card__value}>October 23, 2023</Typography>
            </Box>
            <Box className={styles.Card}>
              <Typography variant="subtitle1" fontWeight="bold" className={styles.Card__heading}>Total</Typography>
              <Typography variant="subtitle2" className={styles.Card__value}>$897.60</Typography>
            </Box>
            <Box className={styles.Card}>
              <Typography variant="subtitle1" fontWeight="bold" className={styles.Card__heading}>Payment Method</Typography>
              <Typography variant="subtitle2" className={styles.Card__value}>Cash On Delivery</Typography>
            </Box>
          </Box>
          <Box>
            <OrderStatusStepper activeStatus={StatusType.Processing} />
          </Box>
          <div className={styles.Address__payment}>
            <div className={styles.Payment}>
              <Typography variant="h5" fontWeight="bold" mb={2}>Total Amount</Typography>
              <div>
                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Sub Total</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>$880.00</span>
                </p>

                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Delivery Charge</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>$10.00</span>
                </p>

                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Tax</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>$0.00</span>
                </p>

                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Discount</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>$880.00</span>
                </p>

                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Total</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>$890.00</span>
                </p>
              </div>
            </div>
            <div className={styles.Address}>
              <Typography variant="h5" fontWeight="bold" mb={4}>Order Details</Typography>
              <div>
                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Name</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>Moinul Hossain</span>
                </p>

                <p className={styles.Payment__paragraph}>
                  <strong className={styles.Payment__paragraph__title}>Total Item</strong>
                  :
                  <span className={styles.Payment__paragraph__value}>1 Item</span>
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
              <TableRow className={styles.TableBody__row}>
                <TableCell className={styles.TableCell}>
                  <div className={styles.TableCell__product}>
                    <div>
                      <img  className={styles.TableCell__product__img} src='' alt="img" />
                    </div>
                    <div className={styles.TableCell__product__details}>
                      <span>Safari Ash Single Sofa</span>
                      <span className={styles.TableCell__product__details__price}>$280.00</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell align='center'>10</TableCell>
                <TableCell align='center'>$100.20</TableCell>
              </TableRow>
              <TableRow className={styles.TableBody__row}>
                <TableCell className={styles.TableCell}>
                  <div className={styles.TableCell__product}>
                    <div>
                      <img  className={styles.TableCell__product__img} src='' alt="img" />
                    </div>
                    <div className={styles.TableCell__product__details}>
                      <span>Armani Leather purse</span>
                      <span className={styles.TableCell__product__details__price}>$40.00</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell align='center'>10</TableCell>
                <TableCell align='center'>$100.20</TableCell>
              </TableRow>
              <TableRow className={styles.TableBody__row}>
                <TableCell className={styles.TableCell}>
                  <div className={styles.TableCell__product}>
                    <div>
                      <img  className={styles.TableCell__product__img} src='' alt="img" />
                    </div>
                    <div className={styles.TableCell__product__details}>
                      <span>Apples</span>
                      <span className={styles.TableCell__product__details__price}>$1.60</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell align='center'>10</TableCell>
                <TableCell align='center'>$100.20</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
