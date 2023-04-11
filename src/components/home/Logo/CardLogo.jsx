import CardTemplateCarousel from '@/components/custom/Carousel/CardTemplateCarousel';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const CardLogo = ({ photos }) => {
   
    return (
        <CardTemplateCarousel 
            className="swiper-logo"
            navigation={false}
            slidesPerView={2}
            spaceBetween={20}
            countRows={2}
            breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}

        >
            {
                photos.length > 0 &&
                photos.map((item, key) =>
                    <SwiperSlide key={key} className="swiper-slide__logo">
                        <div className="home__group_company__logo">
                            <Image 
                                src={item?.photo}
                                alt={item?.title}
                                fill
                            />
                        </div>
                    </SwiperSlide>
                )
            }
        </CardTemplateCarousel>
    );
};

export default CardLogo;