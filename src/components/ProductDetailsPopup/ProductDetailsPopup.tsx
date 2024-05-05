import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import { IoMdAdd } from 'react-icons/io';
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { AiOutlineHeart, AiTwotoneStar, AiTwotoneHeart } from 'react-icons/ai';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import Tooltip from '@mui/material/Tooltip';

import 'swiper/css';
import 'swiper/scss/navigation';
import styles from './ProductDetailsPopup.module.scss';

import Product from '../Products/Product/Product';
import { IProductTemp } from '../Products/types.d';
import { ReduxStore } from '../../redux/store';
import { addProduct, toggleQuantity } from '../../redux/reducers/cart';
import { ModalKey, setModal } from '../../redux/reducers/modal';
import { useIsInWishlist } from '../../hooks/useIsInWishlist';
import { SagaActions } from '../../redux/sagas/actions';
import { useCurrentWishlist } from '../../hooks/useGetCurrentWishlistId';
import { ProductToggleType } from '../Cart/types.d';

interface Props {
  product: IProductTemp | null;
  setActiveProduct: React.Dispatch<React.SetStateAction<IProductTemp | null>>;
}

export default function ProductDetailsPopup({ product, setActiveProduct } : Props) {
  const dispatch = useDispatch();
  const [activeSwiper, setActiveSwiper] = useState<SwiperType>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperSlideStatus, setSwiperSlideStatus] = useState({ isBeginning: true, isEnd: false });
  const [isShowSubstring, setIsShowSubtring] = useState(true);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const cartItems = useSelector((state: ReduxStore) => state.cart.cartProducts);
  const open = useSelector((state: ReduxStore) => state.modal.ProductDetails);
  const relatedProducts = useSelector((state: ReduxStore) => state.relatedProducts.relatedProductsResponse.content);
  const isAuthenticated = useSelector((state: ReduxStore) => state.auth.isAuthenticated);
  const isInWishlist = useIsInWishlist(product?.id || '');
  const activeProductWishlistId = useCurrentWishlist(product?.id || '');

  useEffect(() => {
    if (relatedProducts[0]?.categories[0]?.slug !== product?.categories[0]?.slug) {
      dispatch({ type: SagaActions.FetchRelatedProducts, payload: { category: product?.categories[0].slug } })
    }
  }, [dispatch, product?.categories, relatedProducts, relatedProducts.length])

  useEffect(() => {
    const isFound = cartItems.some(cartProduct => cartProduct.id === product?.id);
    setIsAddedToCart(isFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems.length, product])

  const handlePreviewClick = (index: number) => {
    setActiveIndex(index);
    activeSwiper?.slideTo(index);
  };

  function addToWishlist(id: string) {
    dispatch({ type: SagaActions.AddToWishlist, payload: { id }});
  }

  function removeFromWishlist(id: string) {
    dispatch({ type: SagaActions.RemoveFromWishlist, payload: { id }});
  }

  const amountOfProduct = useMemo(() => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === product?.id);
    return cartItem?.amount;
  }, [cartItems, product?.id])

  const activeCartProduct = useCallback(() => {
    return cartItems.find((cartItem) => cartItem.id === product?.id);
  }, [cartItems, product?.id])

  return (
    <Dialog
      fullWidth={true}
      maxWidth='lg'
      open={open}
      onClose={() => dispatch(setModal({ key: ModalKey.ProductDetails, value: false }))}
    >
      <Box>
        <Box className={styles.ProductDetailsTop__container} sx={{ flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center', md: 'normal' }}}>
          <Box className={styles.ProductSlide__wrapper} sx={{ width: { xs: '80%', md: '50%' }}}>
            <Stack p={2} direction='row' className={styles.CouponSlider} justifyContent="center" alignItems="center">
              {product?.galleryImg.length ? (
                <Button
                  disabled={swiperSlideStatus.isBeginning}
                  className={styles.Button}
                  onClick={() => activeSwiper?.slidePrev()}
                >
                  <GrFormPrevious size={30} />
                </Button>
              ) : null}
              <Swiper
                onReachBeginning={() => {
                  setSwiperSlideStatus({ isEnd: false, isBeginning: true })
                }}
                onReachEnd={() => {
                  setSwiperSlideStatus({ isBeginning: false, isEnd: true })
                }}
                spaceBetween={20}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                slidesPerView={1}
                onInit={(swiper) => {
                  setActiveSwiper(swiper)
                }}
              >
                <SwiperSlide>
                  <img src={String(product?.featuredImg)} alt="details-one" />
                </SwiperSlide>
                {product?.galleryImg.map((img) => (
                  <SwiperSlide key={String(img)}>
                    <img src={String(img)} alt="details-two" />
                  </SwiperSlide>
                ))}
              </Swiper>
              {product?.galleryImg.length ? (
                <Button
                  disabled={swiperSlideStatus.isEnd}
                  className={styles.Button}
                  onClick={() => activeSwiper?.slideNext()}
                >
                  <GrFormNext size={30} />
                </Button>
              ) : null}
            </Stack>
            {product?.galleryImg.length ? (
              <Stack p={3} direction='row' className={styles.CouponSlider} justifyContent="center" alignItems="center">
                <Swiper
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    400:{
                      slidesPerView:2,
                    },
                    639: {
                      slidesPerView: 3,
                    },
                    865:{
                      slidesPerView:4
                    },
                    1000:{
                      slidesPerView:4
                    },
                    1200:{
                      slidesPerView:4
                    },
                    1500:{
                      slidesPerView:4
                    },
                    2000:{
                      slidesPerView:4
                    },
                  }}
                  spaceBetween={5}
                >
                  <SwiperSlide>
                    <img
                      src={String(product?.featuredImg)}
                      className={classNames(styles.SlidePreview__image, {
                        [styles.Active__slide]: activeIndex === 0,
                      })}
                      alt="details-one"
                      onClick={() => handlePreviewClick(0)}
                    />
                  </SwiperSlide>
                  {product?.galleryImg.map((img, index) => (
                    <SwiperSlide key={String(img)}>
                      <img
                        src={String(img)}
                        alt="details-two"
                        onClick={() => handlePreviewClick(index+1)}
                        className={classNames(styles.SlidePreview__image, {
                          [styles.Active__slide]: activeIndex === index+1,
                        })}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Stack>
            ) : null}
          </Box>
          <Box className={styles.ProductDetails__content}>
            <Box className={classNames(styles.ProductName, styles.Row)}>
              <Typography variant='h5'>{product?.name}</Typography>
              {isAuthenticated ? (
                <>
                {isInWishlist ? (
                  <Tooltip title='Remove from wishlist' followCursor={true}>
                    <span>
                      <button className={styles.All__unset} disabled={!isAuthenticated}>
                        <AiTwotoneHeart
                          size={30}
                          className={
                            classNames(styles.Heart__icon, {
                              [styles.Heart__icon__active]: isInWishlist,
                            })
                          }
                          onClick={() => removeFromWishlist(activeProductWishlistId)}
                        />
                      </button>
                    </span>
                  </Tooltip>
                ) : (
                  <Tooltip title='Add To wishlist' followCursor={true}>
                    <span>
                      <button className={styles.All__unset} disabled={!isAuthenticated}>
                        <AiOutlineHeart
                          className={
                            classNames(styles.Heart__icon, {
                              [styles.Heart__icon__active]: isInWishlist,
                            })
                          }
                          size={30}
                          onClick={() => addToWishlist(product?.id || '')}
                        />
                      </button>
                    </span>
                  </Tooltip>
                )}
                </>
              ) : null}
            </Box>
            <Box className={styles.Row}>
              <span className={styles.TextBase}>{product?.unit}</span>
              <Button variant='contained' size='small' className={styles.ProductDetails__btn}>2<AiTwotoneStar size={15}/></Button>
            </Box>
            <Box>
              <Typography variant='body1' className={styles.TextBase}>
              {isShowSubstring ? product?.desc.substring(0, 120) + '...' : product?.desc}
              </Typography>
              <Button variant='outlined' size="small" className={styles.Btn__less} onClick={() => setIsShowSubtring(!isShowSubstring)}>
                {isShowSubstring ? 'More' : 'Less'}
              </Button>
            </Box>
            <Box className={styles.Product__amount}>
              <span className={styles.Discount__price}>${product?.salePrice}</span>
              {product?.price ? (
                <span className={styles.Regular__price}>${product.price}</span>
              ) : null}
            </Box>
            <Box className={styles.Product__add} sx={{ flexDirection: { xs: 'column', md: 'row' }}}>
            {isAddedToCart ? (
              <div className={classNames({
                [styles.Product__amount__two]: true,
                [styles.Btn]: true,
              })}>
                <button
                  className={styles.ProductAmount__btn}
                  onClick={() => dispatch(toggleQuantity({ type: ProductToggleType.DECREMENT, id: product?.id || '' }))}
                >
                  <HiMinusSm />
                </button>
                <span>{amountOfProduct}</span>
                <button
                  disabled={activeCartProduct()?.amount === product?.quantity}
                  className={styles.ProductAmount__btn}
                  onClick={() => dispatch(toggleQuantity({ type: ProductToggleType.INCREMENT, id: product?.id || '' }))}
                >
                  <HiPlusSm />
                </button>
              </div>
            ) : (
              <Button
                variant="contained"
                className={styles.ProductDetails__btn}
                startIcon={<IoMdAdd />}
                onClick={() => {
                  if(product) {
                    dispatch(addProduct(product))
                  }
                }}
              >
                Add To Shopping Cart
              </Button>
            )}
              <Typography variant='subtitle1' className={styles.TextBase}>{product?.quantity} pieces available</Typography>
            </Box>
            <Box className={styles.Categories}>
              <Typography variant='h6'>Categories</Typography>
              <div>
                <Button variant='outlined' size='small'>{product?.categories[0].name.toLowerCase()}</Button>
                <Button variant='outlined' size="small">{product?.subcategories[0].name.toLowerCase()}</Button>
              </div>
            </Box>
          </Box>
        </Box>
        <Box className={styles.Details}>
          <Typography variant='h5' className={styles.Details__title}>Details</Typography>
          <Typography variant='subtitle1' className={styles.Details__description}>
            {product?.desc}
          </Typography>
        </Box>
        <Box className={styles.Related__products}>
          <Typography className={styles.Related__products__text} variant='h5'>Related Products</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {relatedProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Product product={product}  setActiveProduct={setActiveProduct} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
