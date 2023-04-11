// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { Navigation, Autoplay, Grid, Scrollbar } from "swiper";

const CardTemplateCarousel = ({ className, navigation, slidesPerView, spaceBetween, countRows, breakpoints, scrollbar, children }) => {
  return (
    <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        grid={{
          rows: countRows,
        }}
        navigation={navigation} 
        modules={[Grid, Navigation, Autoplay, Scrollbar]} 
        className={className}
        autoplay={{
          delay: 3500,
        }}
        breakpoints={breakpoints}
        scrollbar={scrollbar}
    >
      {children}
    </Swiper>
  );
};

export default CardTemplateCarousel;