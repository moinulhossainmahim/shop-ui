import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import { MdDelete } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { AiOutlineHeart, AiTwotoneStar, AiTwotoneHeart } from 'react-icons/ai';

import 'swiper/css';
import 'swiper/scss/navigation';
import styles from './ProductDetailsPopup.module.scss';

import Product from '../Products/Product/Product';
import { IProductTemp } from '../Products/types.d';
import { ReduxStore } from '../../redux/store';
import { addProduct, removeProduct } from '../../redux/reducers/cart';
import { ModalKey, setModal } from '../../redux/reducers/modal';
import { useIsInWishlist } from '../../hooks/useIsInWishlist';
import { Tooltip } from '@mui/material';
import { SagaActions } from '../../redux/sagas/actions';
import { useCurrentWishlist } from '../../hooks/useGetCurrentWishlistId';

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
  const products = useSelector((state: ReduxStore) => state.products.productsResponse.content);
  const isAuthenticated = useSelector((state: ReduxStore) => state.auth.isAuthenticated);
  const isInWishlist = useIsInWishlist(product?.id || '');
  const activeProductWishlistId = useCurrentWishlist(product?.id || '');

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

  return (
    <Dialog
      fullWidth={true}
      maxWidth='lg'
      open={open}
      onClose={() => dispatch(setModal({ key: ModalKey.ProductDetails, value: false }))}
    >
      <Box>
        <Box className={styles.ProductDetailsTop__container}>
          <Box className={styles.ProductSlide__wrapper}>
            <Stack p={3} direction='row' className={styles.CouponSlider} justifyContent="center" alignItems="center">
              <Button
                disabled={swiperSlideStatus.isBeginning}
                className={styles.Button}
                onClick={() => activeSwiper?.slidePrev()}
              >
                <GrFormPrevious size={30} />
              </Button>
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
              <Button
                disabled={swiperSlideStatus.isEnd}
                className={styles.Button}
                onClick={() => activeSwiper?.slideNext()}
              >
                <GrFormNext size={30} />
              </Button>
            </Stack>
            <Stack p={3} direction='row' className={styles.CouponSlider} justifyContent="center" alignItems="center">
              <Swiper
                spaceBetween={5}
                slidesPerView={4}
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
                          disabled={!isAuthenticated}
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
                          disabled={!isAuthenticated}
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
            <Box className={styles.Product__add}>
            {isAddedToCart ? (
              <Button
                variant="contained"
                color="warning"
                startIcon={<MdDelete />}
                onClick={() => {
                  dispatch(removeProduct({ id: product?.id || ''}))
                }}
              >Remove</Button>
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
              {products.map((product) => (
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
