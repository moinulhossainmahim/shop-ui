import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import 'swiper/css';
import 'swiper/scss/navigation';
import styles from './ProductDetailsPopup.module.scss';

interface Props {
  isOpenProductDetails: boolean;
  setIsOpenProductDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductDetails({ isOpenProductDetails, setIsOpenProductDetails } : Props) {
  const [activeSwiper, setActiveSwiper] = useState<SwiperType>()
  const [swiperSlideStatus, setSwiperSlideStatus] = useState({ isBeginning: true, isEnd: false });

  return (
    <Dialog
      fullWidth={true}
      maxWidth='lg'
      open={isOpenProductDetails}
      onClose={() => setIsOpenProductDetails(false)}
    >
      <Box>
        <Box>
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
              spaceBetween={20}
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
          </Stack>
        </Box>
      </Box>
    </Dialog>
  );
}
