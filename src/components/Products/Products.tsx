import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import Product from './Product/Product';
import { IProductTemp } from './types.d';
import ProductDetailsPopup from '../ProductDetailsPopup/ProductDetailsPopup';
import { SagaActions } from '../../redux/sagas/actions';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../redux/store';

const drawerWidth = 240;

const Main = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: 'rgb(243,244,246)',
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default function Products() {
  const dispatch = useDispatch();
  const [activeProduct, setActiveProduct] = useState<IProductTemp | null>(null);
  const products = useSelector((state: ReduxStore) => state.products.productsResponse.content);

  useEffect(() => {
    dispatch({ type: SagaActions.FetchProducts });
  }, [])

  return (
    <>
      <Main open={true}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {products?.map((product) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}>
                  <Product product={product} setActiveProduct={setActiveProduct} />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Main>
      <ProductDetailsPopup product={activeProduct} setActiveProduct={setActiveProduct} />
    </>
  )
}
