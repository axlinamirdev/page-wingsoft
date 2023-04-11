import CardTemplateCarousel from '@/components/custom/Carousel/CardTemplateCarousel';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const CardItem = () => {

    const handleMetadata = event => {
        event.muted=true;
    }


    return (
        <CardTemplateCarousel 
            className="carousel" 
            navigation={true}
            slidesPerView="auto"
            spaceBetween={0}
        >
            <SwiperSlide>
                <div className="carousel__container">
                    <div className="carousel__image carousel__image--one">
                        <video onLoadedMetadata={handleMetadata} muted autoPlay loop className="carousel__video">
                            <source src="/video/header.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="carousel__item carousel__item--one">
                            <h2 className="carousel__item__title">Te ayudamos a llevar tu empresa al siguiente nivel</h2> 
                            <p className="carousel__item__subtitle carousel__item__subtitle--one">¡Vivimos en la era de la información! Somos el quipo ideal para ayudarte a diseñar, desarrollar, publicar tus sitios web y aplicaciones. Con la estrategias adecuadas que harán de tu empresa una de las mejores del mercado. </p> 
                            <div className="carousel__item__middle">
                                <form className="carousel__form">
                                    <input 
                                        type="text"
                                        id="busqueda"
                                        name="busqueda"
                                        className="carousel__form__input"
                                        placeholder="Déjanos tu email"
                                    />
                                    <button type="submit" className="carousel__form__button">Contáctanos</button>
                                </form>
                                <p className="carousel__form__small">Solicita más información dejándonos tu correo electrónico.</p>
                            </div>
                        </div>   
                    </div>                
                </div> 
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel__container">
                    <div className="carousel__image">
                        <Image src="/images/home-2.png" className="carousel__image__one" alt="Te ayudamos a llevar tu empresa al siguiente nivel" fill />
                    </div>   
                    <div className="carousel__item carousel__item--ocular">
                        <div className="carousel__logo">
                            <Image src="/images/ocular.svg" alt="ocular" fill />
                        </div> 
                        <h2 className="carousel__item__title">Ocular</h2> 
                        <p className="carousel__item__subtitle">La plataforma de video-commerce de Ocular, que funciona como Software as a Service (SaaS), permite a las empresas instalarla en sus canales de venta digitales y contar con un asistente para realizar videollamadas con los usuarios en caso de que tengan dudas.</p> 
                        <div className="carousel__item__middle">
                            <button type="submit" className="carousel__form__button">Quiero leer más</button>
                        </div>
                    </div>                  
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel__container">
                    <div className="carousel__image">
                        <Image src="/images/home-3.png" className="carousel__image__one" alt="Te ayudamos a llevar tu empresa al siguiente nivel" fill />
                    </div>   
                    <div className="carousel__item carousel__item--services">
                        <h2 className="carousel__item__title">Conoce todos nuestros servicios</h2> 
                        <div className="carousel__item__middle">
                            <button type="submit" className="carousel__form__button">Ver todos los servicios</button>
                        </div>
                    </div>                  
                </div>
            </SwiperSlide>
        </CardTemplateCarousel>
      );
}

export default CardItem;