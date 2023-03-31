// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const CardTemplateCarousel = ({ className, children }) => {
  return (
    <Swiper
        navigation={true} modules={[Navigation]} className={className}
    >
      {children}
    </Swiper>
  );
};

export default CardTemplateCarousel;