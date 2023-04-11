
import TemplateThumb from '@/components/custom/Carousel/TemplateThumb';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const CarouselHeader = () => {

    

    return (
        <TemplateThumb
            className="services-carousel" 
            navigation={false}
            slidesPerView={3}
            spaceBetween={10}
        />
    );
};

export default CarouselHeader;