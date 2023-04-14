import CarouselHeader from '@/components/Services/CarouselHeader';
import CardStrategy from '@/components/Services/Strategy/CardStrategy';
import CardDetail from '@/components/Services/CardDetail/CardDetail';
import SectionBlog from '@/components/home/Blog/SectionBlog';

import GetDetailServices from '@/helpers/GetDetailServices';
import GetDataStrategy from '@/helpers/GetDataStrategy';
import GetDataBlog from '@/helpers/GetDataBlog';

import Image from 'next/image';

export default function Servicios() {
    
    const services = GetDetailServices();
    const listStrategy = GetDataStrategy();
    const listPostBlogs = GetDataBlog();

  return (
    <>
        <main className="services">  
            <section className="home-grid services_header">
                <section className="services_header__left">
                    <h1 className="services_header__title">
                        <span className="services_header__title--purple">Servicios de Cloud Computing </span>  <br/>
                        de alto impacto para tu empresa.               
                    </h1> 
                    <p className="services_header__description">
                        Nuestro servicio de Cloud Computing ofrece soluciones en la nube para empresas que buscan una mayor flexibilidad, escalabilidad y seguridad en la gestión de sus aplicaciones y datos. Contamos con expertos que ayudarán a tu empresa a migrar, además de ofrecer servicios de mantenimiento y soporte para que puedas enfocarte en tu negocio sin preocuparte por la gestión de infraestructura.               
                    </p> 
                    <section className="services_header__logo">
                        <div className="services_header__icon">
                            <Image 
                                src="/images/logo/coca-cola.svg"
                                alt="Coca cola"
                                fill
                            />
                        </div>
                        <div className="services_header__icon">
                            <Image 
                                src="/images/logo/pepsico.svg"
                                alt="Coca cola"
                                fill
                            />
                        </div>
                        <div className="services_header__icon">
                            <Image 
                                src="/images/logo/mcdonals.svg"
                                alt="Coca cola"
                                fill
                            />
                        </div>
                        <div className="services_header__icon">
                            <Image 
                                src="/images/logo/sony.svg"
                                alt="Coca cola"
                                fill
                            />
                        </div>
                    </section> 
                 </section>  
                 <section className="services_header__right">
                 <CarouselHeader />
                 </section>  
            </section> 

            <section className="home-grid">
                <section className="services_main">
                    <section className="services_main__container">
                        <h1 className="services_main__title">
                            ¿Cómo funciona una estrategia de Cloud Computing en tu empresa?               
                        </h1> 
                        <hr className="line__purple" />
                        <p className="services_main__description">
                            Analizamos el entorno actual de tu compañía para identificar fortalezas, debilidades y grado de operación, con el objetivo de crear una estrategia de migración a la nube a tu medida.
                        </p> 
                    </section>
                    <section className="services_main__options">
                        {
                            listStrategy.length > 0 &&
                            listStrategy.map((item, key) =>
                                <CardStrategy
                                    key={key}
                                    {...item}
                                />
                            )
                        } 
                    </section>
                 </section>                     
            </section>       


            <section className="home-grid">
                <section className="services_main">
                    <section className="services_main__container">
                        <h1 className="services_main__title">
                            Nuestros servicios de Cloud Computing             
                        </h1> 
                        <hr className="line__purple" />
                        <p className="services_main__description">
                            Vamos a crear una estrategia de migración a la nube escalable y de alto impacto para tu empresa.
                        </p> 
                    </section>
                    <section className="services_home_item">
                        {
                            services.length > 0 &&
                            services.map((item, key) =>
                                <CardDetail
                                    key={key}
                                    {...item}
                                />
                            )
                        }                        
                    </section>
                 </section>                     
            </section>  
            
            <section className="background-cloud">
                <section className="home-grid">
                    <section className="services_cloud">
                        <section className="services_cloud__container">
                            <h1 className="services_cloud__title">
                                ¿Necesitas una consultoría <span className="services_cloud__title--purple"> sin costo </span>     
                                para generar una estrategia <span className="services_cloud__title--purple"> Cloud Computing en tu empresa?</span>  
                            </h1> 
                            <hr className="line__purple" />
                        </section>
                        <section className="services_cloud__body">
                            <div className="services_cloud__items">
                                <ul className="services_cloud__items__ul">
                                    <li className="services_cloud__items__li">
                                        Diseñamos una estrategia de migración a la nube para 
                                        <span className="services_cloud__items__li--purple"> escalar los servicios de tu empresa.</span> 
                                    </li>
                                    <li className="services_cloud__items__li">
                                        Definimos la arquitectura e infraestructura de
                                        <span className="services_cloud__items__li--purple"> nube adecuada para tu empresa.</span> 
                                    </li>
                                    <li className="services_cloud__items__li">
                                    Tu empresa va adquirir hasta <span className="services_cloud__items__li--purple"> 31% de ahorro en costos de los servicios de infraestructura </span> 
                                    en la nube en comparación con una infraestructura On Premise.
                                    </li>
                                </ul>
                            </div>
                            <div className="services_cloud__photo">
                                <Image src="/images/photo-serveless.png" alt="Servicios cloud" fill />
                            </div>
                        </section>
                    </section>                     
                </section>  
            </section>
            
            <SectionBlog listPostBlogs={listPostBlogs} />

        </main>
    </>
  )
}
