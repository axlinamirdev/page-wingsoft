// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from 'next/image';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const TemplateThumb = ({ className, navigation, slidesPerView, spaceBetween }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
        <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
        >
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
        </Swiper>
        <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
        >
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
            <SwiperSlide>
            <Image fill src="/images/header-1.png" />
            </SwiperSlide>
        </Swiper>
      </>
  );
};

export default TemplateThumb;