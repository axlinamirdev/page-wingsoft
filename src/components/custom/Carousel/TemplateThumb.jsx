import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Image from 'next/image';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function TemplateThumb() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumb-photo-main"
      >
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
         </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumb-photo"
      >
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/images/header-1.png" fill />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/images/header-1.png" fill />
        </SwiperSlide>
      </Swiper>
    </>
  );
}