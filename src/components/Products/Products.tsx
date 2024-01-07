import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import styles from './Products.module.scss';

import Product from './Product/Product';
import { IProductTemp } from './types.d';
import ProductDetailsPopup from '../ProductDetailsPopup/ProductDetailsPopup';
import { SagaActions } from '../../redux/sagas/actions';
import { ReduxStore } from '../../redux/store';
import ProductsLoader from '../ProductsLoader';

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
  const itemListRef = useRef(null);
  const showRef = useRef(null);
  const isAuthenticated = useSelector((state: ReduxStore) => state.auth.isAuthenticated);
  const [activeProduct, setActiveProduct] = useState<IProductTemp | null>(null);
  const { content: products, meta: { hasNextPage, page } } = useSelector((state: ReduxStore) => state.products.productsResponse);
  const wishlist = useSelector((state: ReduxStore) => state.wishlist.wishlistResponse.content);
  const isLoading = useSelector((state: ReduxStore) => state.loader.FetchProducts);

  useEffect(() => {
    if (isAuthenticated && !wishlist.length) {
      dispatch({ type: SagaActions.FetchWishlist })
    }
    if(!products.length) {
      dispatch({ type: SagaActions.FetchProducts, payload: {}});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  const handleLoadMore = useCallback(() => {
    if (hasNextPage) {
      dispatch({ type: SagaActions.FetchProducts, payload: { page: page + 1 }});
    }
  }, [dispatch, hasNextPage, page])

  return (
    <>
      <Main open={true}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} ref={itemListRef} position='relative'>
            <div id="show" className="fly-cart" ref={showRef} style={{ position: 'absolute', zIndex: 9999, width: '200px', filter: 'brightness(200%)' }}>
              <img className="img-fluid" src="" alt="" />
            </div>
          {isLoading ? (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product}>
                  <ProductsLoader />
                </Grid>
              ))}
            </>
          ) : null}
          {!isLoading && products.length ? (
            <>
              {products?.map((product) => {
                return (
                  <Grid item xs={12} sm={4} md={3} lg={3} xl={2} key={product.id}>
                    <Product product={product} setActiveProduct={setActiveProduct} />
                  </Grid>
                )
              })}
            </>
          ) : null}
          </Grid>
        </Box>
        {hasNextPage ? (
          <Box className={styles.LoadMoreBtn__container}>
            <Button variant='contained' className={styles.LoadMoreBtn} disabled={!hasNextPage} onClick={handleLoadMore}>
              Load More
            </Button>
          </Box>
        ) : null}
      </Main>
      <ProductDetailsPopup product={activeProduct} setActiveProduct={setActiveProduct} />
    </>
  )
}
