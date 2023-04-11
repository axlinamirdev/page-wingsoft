import CardTemplateCarousel from '@/components/custom/Carousel/CardTemplateCarousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const CardTypeProject = ({ typeProjects }) => {
    return (
        <CardTemplateCarousel 
            className="swiper-project"
            navigation={true}
            slidesPerView="auto"
            spaceBetween={0}
        >
            {
                typeProjects.length > 0 &&
                typeProjects.map((item, key) =>
                    <SwiperSlide key={key}>
                        <div className="type_proyect__right__carousel">
                            <div className="type_proyect__right__image">
                                <Image 
                                    src={item?.imagen}
                                    alt={item?.title}
                                    fill
                                    />
                            </div> 
                            <div className="type_proyect__right__body">
                                <p className="type_proyect__right__title">
                                    {item?.title}
                                </p> 
                                <p className="type_proyect__right__description">
                                    {item?.description}
                                </p> 
                            </div> 
                        </div> 
                    </SwiperSlide>
                )
            }
        </CardTemplateCarousel>
    );
};

export default CardTypeProject;