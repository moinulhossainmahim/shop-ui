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
import { products } from '../Products/test-data';
import { IProduct } from '../Products/types.d';
import { ReduxStore } from '../../redux/store';
import { addProduct, removeProduct } from '../../redux/reducers/cart';
import { ModalKey, setModal } from '../../redux/reducers/modal';

interface Props {
  product: IProduct | null;
  setActiveProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
}

export default function ProductDetailsPopup({ product, setActiveProduct } : Props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: ReduxStore) => state.cart.cartProducts);
  const open = useSelector((state: ReduxStore) => state.modal.ProductDetails);
  const [activeSwiper, setActiveSwiper] = useState<SwiperType>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperSlideStatus, setSwiperSlideStatus] = useState({ isBeginning: true, isEnd: false });
  const [isStared, setIsStared] = useState(false);
  const [isShowSubstring, setIsShowSubtring] = useState(true);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const productDetails = 'clementine is a tangor, a citrus fruit hybrid between a willowleaf mandarin orange and a sweet orange, named for its late 19th-century discoverer. The exterior is a deep orange colour with a smooth, glossy appearance.'

  useEffect(() => {
    const isFound = cartItems.some(cartProduct => cartProduct.id === product?.id);
    setIsAddedToCart(isFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems.length, product])

  const handlePreviewClick = (index: number) => {
    setActiveIndex(index);
    activeSwiper?.slideTo(index);
  };

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
                  <img src={product?.img} alt="details-one" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src='https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F591%2FClementines-2.png&w=1080&q=75' alt="details-two" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src='https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F590%2FClementines.png&w=1080&q=75' alt="details-three" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src='https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F589%2FClementines-1.png&w=1080&q=75' alt="details-four" />
                </SwiperSlide>
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
                    src={product?.img}
                    className={classNames(styles.SlidePreview__image, {
                      [styles.Active__slide]: activeIndex === 0,
                    })}
                    alt="details-one"
                    onClick={() => handlePreviewClick(0)}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F591%2FClementines-2.png&w=1080&q=75'
                    alt="details-two"
                    onClick={() => handlePreviewClick(1)}
                    className={classNames(styles.SlidePreview__image, {
                      [styles.Active__slide]: activeIndex === 1,
                    })}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F590%2FClementines.png&w=1080&q=75'
                    alt="details-three"
                    onClick={() => handlePreviewClick(2)}
                    className={classNames(styles.SlidePreview__image, {
                      [styles.Active__slide]: activeIndex === 2,
                    })}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F589%2FClementines-1.png&w=1080&q=75'
                    alt="details-four"
                    onClick={() => handlePreviewClick(3)}
                    className={classNames(styles.SlidePreview__image, {
                      [styles.Active__slide]: activeIndex === 3,
                    })}
                  />
                </SwiperSlide>
              </Swiper>
            </Stack>
          </Box>
          <Box className={styles.ProductDetails__content}>
            <Box className={classNames(styles.ProductName, styles.Row)}>
              <Typography variant='h5'>{product?.name}</Typography>
              {isStared ? (
                <AiTwotoneHeart size={30} className={
                  classNames(styles.Heart__icon, {
                    [styles.Heart__icon__active]: isStared,
                  })
                } onClick={() => setIsStared(!isStared)} />
              ) : (
                <AiOutlineHeart
                  className={
                    classNames(styles.Heart__icon, {
                      [styles.Heart__icon__active]: isStared,
                    })
                  }
                  size={30}
                  onClick={() => setIsStared(!isStared)}
                />
              )}
            </Box>
            <Box className={styles.Row}>
              <span className={styles.TextBase}>1lb</span>
              <Button variant='contained' size='small' className={styles.ProductDetails__btn}>2<AiTwotoneStar size={15}/></Button>
            </Box>
            <Box>
              <Typography variant='body1' className={styles.TextBase}>
              {isShowSubstring ? productDetails.substring(0, 120) + '...' : productDetails}
              </Typography>
              <Button variant='outlined' size="small" className={styles.Btn__less} onClick={() => setIsShowSubtring(!isShowSubstring)}>
                {isShowSubstring ? 'More' : 'Less'}
              </Button>
            </Box>
            <Box className={styles.Product__amount}>
              <span className={styles.Discount__price}>{product?.discountPrice}</span>
              {product?.regularPrice ? (
                <span className={styles.Regular__price}>{product.regularPrice}</span>
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
              <Typography variant='subtitle1' className={styles.TextBase}>50 pieces available</Typography>
            </Box>
            <Box className={styles.Categories}>
              <Typography variant='h6'>Categories</Typography>
              <div>
                <Button variant='outlined' size='small'>fruits and vegetables</Button>
                <Button variant='outlined' size="small">fruits</Button>
              </div>
            </Box>
          </Box>
        </Box>
        <Box className={styles.Details}>
          <Typography variant='h5' className={styles.Details__title}>Details</Typography>
          <Typography variant='subtitle1' className={styles.Details__description}>
            clementine is a tangor, a citrus fruit hybrid between a willowleaf mandarin orange and a sweet orange, named for its late 19th-century discoverer.
            The exterior is a deep orange colour with a smooth, glossy appearance.
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
