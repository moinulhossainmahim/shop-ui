import { useState } from 'react';
import classNames from 'classnames';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { AiOutlineHeart, AiTwotoneStar, AiTwotoneHeart } from 'react-icons/ai';

import 'swiper/css';
import 'swiper/scss/navigation';
import styles from './ProductDetailsPopup.module.scss';
import Product from '../Products/Product/Product';
import { products } from './test-data';

interface Props {
  isOpenProductDetails: boolean;
  setIsOpenProductDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductDetails({ isOpenProductDetails, setIsOpenProductDetails } : Props) {
  const [activeSwiper, setActiveSwiper] = useState<SwiperType>()
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperSlideStatus, setSwiperSlideStatus] = useState({ isBeginning: true, isEnd: false });
  const [isStared, setIsStared] = useState(false);
  const [isShowSubstring, setIsShowSubtring] = useState(true)
  const productDetails = 'clementine is a tangor, a citrus fruit hybrid between a willowleaf mandarin orange and a sweet orange, named for its late 19th-century discoverer. The exterior is a deep orange colour with a smooth, glossy appearance.'

  const handlePreviewClick = (index: number) => {
    setActiveIndex(index);
    activeSwiper?.slideTo(index);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth='lg'
      open={isOpenProductDetails}
      onClose={() => setIsOpenProductDetails(false)}
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
                  <img src='https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F742%2Fclementines_h74qrp.jpg&w=1080&q=75' alt="details-one" />
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
                    src='https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F742%2Fclementines_h74qrp.jpg&w=1080&q=75'
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
              <Typography variant='h5'>Clementines</Typography>
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
              <span className={styles.Discount__price}>$2.50</span>
              <span className={styles.Regular__price}>$3.00</span>
            </Box>
            <Box className={styles.Product__add}>
              <Button variant='contained' className={styles.ProductDetails__btn}>Add To Shopping Cart</Button>
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
            clementine is a tangor, a citrus fruit hybrid between a willowleaf mandarin orange and a sweet orange, named for its late 19th-century discoverer. The exterior is a deep orange colour with a smooth, glossy appearance.
          </Typography>
        </Box>
        <Box className={styles.Related__products}>
          <Typography className={styles.Related__products__text} variant='h5'>Related Products</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
