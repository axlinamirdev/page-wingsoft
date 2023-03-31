import CardTemplateCarousel from '@/components/custom/Carousel/CardTemplateCarousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const CardTypeProject = () => {
    return (
        <CardTemplateCarousel className="swiper-project">
            <SwiperSlide>
                <div className="home_project__image">
                    <Image 
                        src="/images/div_home.png"
                        fill
                        />
                </div> 
            </SwiperSlide>
            <SwiperSlide>
                <div className="home_project__image">
                    <Image 
                        src="/images/div_home.png"
                        fill
                        />
                </div> 
            </SwiperSlide>
            <SwiperSlide>
                <div className="home_project__image">
                    <Image 
                        src="/images/div_home.png"
                        fill
                        />
                </div> 
            </SwiperSlide>
        </CardTemplateCarousel>
    );
};

export default CardTypeProject;