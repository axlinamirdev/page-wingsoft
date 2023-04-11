import CardTemplateCarousel from '@/components/custom/Carousel/CardTemplateCarousel';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

const CardTestimony = ({ listTestimony }) => {

    return (
        <CardTemplateCarousel 
            className="testimony-carousel" 
            navigation={false}
            slidesPerView={1}
            spaceBetween={50}
            scrollbar={{
                hide: true,
              }}
            breakpoints={{
                "622": {
                    "slidesPerView": 2,
                    "spaceBetween": 15,
                  },
                "765": {
                  "slidesPerView": 2,
                  "spaceBetween": 15,
                },
                "992": {
                    "slidesPerView": 3,
                    "spaceBetween": 15,
                  },
                "1024": {
                  "slidesPerView":3,
                  "spaceBetween": 50,
                }
          }}
        >
            {
                listTestimony.length > 0 &&
                listTestimony.map((testimony, key) => 
                    <SwiperSlide key={key}>
                        <div className="testimony__card">
                            <div className="testimony__card__imagen">
                                <div className="testimony__card__circle">
                                    <Image src={testimony?.photo} alt={testimony?.author} width="90" height="91" />
                                </div>
                                <div className="testimony__card__logo">
                                    <Image src={testimony?.logo} alt="Foto 1" width="160" height="50" />
                                </div>
                            </div>
                            <p className="testimony__card__description">{testimony?.description}</p>
                            <p className="testimony__card__author">{testimony?.author}</p>
                            <p className="testimony__card__charge">{testimony?.charge}</p>
                            <div className="testimony__card__action">
                                <Link href="/" legacyBehavior>
                                    <a className="testimony__card__action__link">
                                        Seguir leyendo
                                    </a>
                                </Link>                                
                            </div>
                        </div>
                    </SwiperSlide>
                )
            }
            
        </CardTemplateCarousel>
    );
};

export default CardTestimony;