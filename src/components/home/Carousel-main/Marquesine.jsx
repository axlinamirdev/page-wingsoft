import CardTemplateCarousel from '@/components/custom/Carousel/CardTemplateCarousel';
import { SwiperSlide } from 'swiper/react';

const Marquesine = ({ solucions }) => {
    return (
        <CardTemplateCarousel 
            className="marquesine" 
            navigation={false}
            slidesPerView='auto'
            spaceBetween={0}
            breakpoints={{
                "768": {
                  "slidesPerView": 3,
                  "spaceBetween": 15,
                },
                "1024": {
                  "slidesPerView":3,
                  "spaceBetween": 5,
                }
          }}
        >
            {
                solucions.length > 0 &&
                solucions.map((item, key) =>
                    <SwiperSlide key={key}>
                        <div className="marquesine__container">
                            <p className="marquesine__title">
                                 {item?.title}     
                            </p>                
                        </div> 
                    </SwiperSlide>
                )
            }
        </CardTemplateCarousel>
      );
}

export default Marquesine;