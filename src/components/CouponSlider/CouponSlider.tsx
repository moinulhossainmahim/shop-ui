import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

import 'swiper/css';
import 'swiper/scss/navigation';
import styles from './CouponSlider.module.scss'

export default function CouponSlider() {
  const [activeSwiper, setActiveSwiper] = useState<SwiperType>()
  const [swiperSlideStatus, setSwiperSlideStatus] = useState({ isBeginning: true, isEnd: false });

  return (
    <Stack sx={{ marginTop: { xs: '64px', md: '0px' } }} p={3} direction='row' className={styles.CouponSlider} justifyContent="center" alignItems="center">
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
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          1065 :{
            slidesPerView: 3
          },
          1500: {
            slidesPerView: 4,
          }
        }}
        spaceBetween={20}
        slidesPerView={4}
        onInit={(swiper) => {
          setActiveSwiper(swiper)
        }}
      >
        <SwiperSlide>
          <img src='/offer-1.webp' alt="offer-one" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/offer-2.webp' alt="offer-two" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/offer-3.webp' alt="offer-three" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/offer-4.webp' alt="offer-four" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/offer-5.webp' alt="offer-five" loading="lazy" />
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
  )
}
