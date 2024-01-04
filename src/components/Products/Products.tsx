import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';

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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const cartRef = window.cartRef;
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

  const handleButtonClick = (event: any) => {
    const item = event.target.closest(".item");
    const img = item.querySelector("img").src;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const itemListLeft = itemListRef.current?.getBoundingClientRect().left;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cartPosLeft = cartRef.current?.getBoundingClientRect().left;

    console.log('itemListLeft', itemListLeft);
    console.log('cartPosLeft', cartPosLeft);
    const itemX = item.getBoundingClientRect().left - itemListLeft;
    const itemY = item.getBoundingClientRect().top - 200;
    console.log('itemX', itemX);
    console.log('itemY', itemY);
    gsap.killTweensOf(showRef.current);

    gsap.set(showRef.current, {
      left: `${itemX}px`,
      top: `${itemY}px`,
      width: '200px',
      opacity: 1
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    showRef.current.querySelector('img').src = img;

    gsap.to(showRef.current, {
      duration: 0.8,
      left: cartPosLeft - itemListLeft,
      top: 10,
      width: 20
    });

    gsap.to(showRef.current, {
      duration: 0.3,
      opacity: 0,
      delay: 0.5
    });
  };

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
                    <Product product={product} setActiveProduct={setActiveProduct} handleButtonClick={handleButtonClick} />
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
      {/* <div className="container position-relative" ref={itemListRef}>
        <div id="show" className="position-absolute fly-cart" ref={showRef}>
          <img className="img-fluid" src="" alt="" />
        </div>
        <div className="d-flex justify-content-end pt-3 pb-5">
          <i id="cart" className="fas fa-shopping-cart" ref={cartRef}></i>
        </div>
        <div className="row mb-4">
          <div className="col-3 item">
            <img className="img-fluid" src="https://pokemon.wingzero.tw/assets/pokemon/387.png" alt="" />
            <div>
              <button className="btn btn-info" onClick={handleButtonClick}><i className="fas fa-cart-plus"></i></button>
            </div>
          </div>
          <div className="col-3 item">
            <img className="img-fluid" src="https://pokemon.wingzero.tw/assets/pokemon/388.png" alt="" />
            <div>
              <button className="btn btn-info" onClick={handleButtonClick}><i className="fas fa-cart-plus"></i></button>
            </div>
          </div>
          <div className="col-3 item">
            <img className="img-fluid" src="https://pokemon.wingzero.tw/assets/pokemon/389.png" alt="" />
            <div>
              <button className="btn btn-info" onClick={handleButtonClick}><i className="fas fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
      </div> */}
      <ProductDetailsPopup product={activeProduct} setActiveProduct={setActiveProduct} />
    </>
  )
}
