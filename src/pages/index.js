import CardItem from '@/components/home/Carousel-main/CardItem';
import CardLogo from '@/components/home/Logo/CardLogo';
import CardService from '@/components/home/Services/CardService';
import CardTypeProject from '@/components/home/TypeProject/CardTypeProject';
import ItemReasons from '@/components/home/Reasons/ItemReasons';
import CardTestimony from '@/components/home/Testimony/CardTestimony';
import SectionBlog from '@/components/home/Blog/SectionBlog';
import Marquesine from '@/components/home/Carousel-main/Marquesine';
import Image from 'next/image';
import Link from 'next/link';

import GetDataServices from '@/helpers/GetDataServices';
import GetDataReasons from '@/helpers/GetDataReasons';
import GetDataSolucions from '@/helpers/GetDataSolucions';
import GetTypeService from '@/helpers/GetTypeService';
import GetDataLogo from '@/helpers/GetDataLogo';
import GetDataTestimony from '@/helpers/GetDataTestimony';
import GetDataBlog from '@/helpers/GetDataBlog';

export default function Search() {

    const services = GetDataServices();
    const reasons = GetDataReasons();
    const solucions = GetDataSolucions();
    const typeProjects = GetTypeService();
    const listPhotos = GetDataLogo();
    const listTestimony = GetDataTestimony();
    const listPostBlogs = GetDataBlog();

    return (
        <>
            <main className="home">
                <section className="home-grid-carousel">
                    <section className="grid-carousel">
                        <CardItem solucions={solucions} />
                    </section>   
                </section>   
                <section className="home-grid">
                    <section className="home__group_company">
                        <CardLogo photos={listPhotos} /> 
                    </section>   
                </section>        
                <section className="services__bottom">
                    <section className="home-grid">
                        <h3 className="services__bottom__title">
                            Todos nuestros servicios               
                        </h3>
                        <hr className="home__line home__line--services" />
                        <section className="services__carousel">
                                {
                                services.length > 0 &&
                                services.map((item, key) => (
                                    <CardService key={key} {...item} />
                                ))
                            }
                        </section>
                        <div className="home_service__all">
                            <Link href="/about" legacyBehavior>
                            <a className="items_card_more">Ver todos los servicios</a>
                            </Link>
                        </div>
                    </section>
                </section>
                <section className="home-grid">
                    <h3 className="title-main-h3 title-main-h3--cells">
                    Líder en células de trabajo online para <span className="title-main-h3--purple"> cualquier tipo de desarrollo tecnológico </span>                              
                    </h3>
                </section>
                <section className="home-grid-fill">
                    <div className="type_proyect__left">
                        <div className="type_proyect__left__photo">
                            <Image src="/images/letter.png" alt="Logo" fill />
                        </div> 
                        <div className="type_proyect__left__body">
                            <p className="type_proyect__left__title">
                                Tipos de Proyectos que realizamos
                            </p> 
                            <p className="type_proyect__left__description">
                                Egestas eget vestibulum non fermentum vitae eu condimentum neque. Turpis id in convallis et nulla tempor. Nec semper volutpat tortor eget amet nunc viverra ipsum. Non tortor lacus orci quam in leo. Mattis facilisi ipsum viverra volutpat sem scelerisque tellus id.
                            </p> 
                        </div>
                    </div>
                    <div className="type_proyect__right">
                        <CardTypeProject typeProjects={typeProjects} />
                    </div>
                </section>
                <section className="home-grid">
                    <h3 className="title-main-h3 title-main-h3--reasons">
                        4 Razones que hacen <span className="title-main-h3--purple">Wingsoft tu mejor opción </span>                              
                    </h3>
                    <div className="reasons__container">
                        {
                            reasons.length>0 &&
                            reasons.map((item, key) =>
                                <ItemReasons key={key} {...item} />
                            )
                        }
                    </div>
                </section>
                <section className="home-grid">
                    <h3 className="title-main-h3 title-main-h3--certificate">
                        <span className="title-main-h3--purple">Estamos certificados para entregar un mejor servicio </span> 
                        y calidad en todas nuestras estrategias                                
                    </h3>
                    <div className="certificate__container">
                        <div className="certificate__container__logo">
                            <Image 
                                src="/images/cliente/microsoft.svg"
                                width={150}
                                height={50}
                                alt="Microsoft"
                            />
                        </div>
                        <div className="certificate__container__logo">
                            <Image 
                            src="/images/cliente/google.svg"
                            width={150}
                            height={50}
                            alt="Google"
                            />
                        </div>
                        <div className="certificate__container__logo">
                            <Image 
                            src="/images/cliente/mailchimp.svg"
                            width={150}
                            height={50}
                            alt="Mailchimp"
                            />
                        </div>
                        <div className="certificate__container__logo">
                            <Image 
                            src="/images/cliente/shopify.svg"
                            width={150}
                            height={50}
                            alt="Shopify"
                            />
                        </div>
                        <div className="certificate__container__logo">
                            <Image 
                            src="/images/cliente/facebook.svg"
                            width={150}
                            height={50}
                            alt="Facebook"
                            />
                        </div>
                    </div> 
                </section>
                <section className="home-grid">
                    <h3 className="title-main-h3">
                        ¿Cómo Wingsoft hace  
                        <span className="title-main-h3--purple"> crecer tu empresa?</span>                
                    </h3>
                </section>        
                <section className="grow__items__grid grow__items__sticky">
                    <div className="grow__items__photo">
                        
                        <div 
                            className="grow__items__animation" 
                            data-index="0"
                            data-aos-anchor=".item-build"
                            data-aos="fade"
                        >
                            <div className="grow__items__animation_line"></div>
                            <div className="grow__items__animation_circle grow__items__animation_circle--green">01</div>
                        </div>
                        <div 
                            className="grow__items__animation" 
                            data-index="1"
                            data-aos-anchor=".item-improvement"
                            data-aos="fade"
                        >
                            <div className="grow__items__animation_line"></div>
                            <div className="grow__items__animation_circle grow__items__animation_circle--orange">02</div>
                        </div>
                        <div 
                            className="grow__items__animation" 
                            data-index="2"
                            data-aos-anchor=".item-evolve"
                            data-aos="fade"
                        >
                            <div className="grow__items__animation_line"></div>
                            <div className="grow__items__animation_circle grow__items__animation_circle--purple">03</div>
                        </div>
                    </div>
                    <section className="grow__items__scroll">
                        <div 
                            className="grow__items__body item-build"
                        >
                            <p className="grow__items__title">
                                Construye
                            </p>
                            <p className="grow__items__description">
                                Diseñamos, construimos y desarrollamos productos digitales centrados en el usuario. La innovación digital va a ser el centro de tu producto y vas a renovar tu propuesta de valor en el mercado.
                            </p>
                        </div>
                        <div 
                            className="grow__items__body item-improvement" 
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                        >
                            <p className="grow__items__title">
                                Mejora
                            </p>
                            <p className="grow__items__description">
                                Con ayuda de estrategias cloud-first y mobile-first nos vamos a enfocar en potenciar tu producto en el mercado. Te ayudamos a mejorar experiencia que tus clientes viven con tu producto servicio.
                            </p>
                        </div>
                        <div 
                            className="grow__items__body item-evolve"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                        >
                            <p className="grow__items__title">
                                Evoluciona
                            </p>
                            <p className="grow__items__description">
                                Apostamos por la innovación en tu empresa con el objetivo de crear productos digitales con tecnología de punta que impulsen la propuesta de valor de tu negocio en el mercado.
                            </p>
                        </div>
                    </section>
                </section>
                <section className="home-grid">
                    <h3 className="title-main-h3 title-main-h3--testimony">
                        <span className="title-main-h3--purple">El testimonio de nuestros clientes </span> habla por nosotros                 
                    </h3>
                    <section className="testimony">
                        <CardTestimony listTestimony={listTestimony} />
                    </section>
                </section>
                <SectionBlog listPostBlogs={listPostBlogs} />
            </main>
            <Marquesine  solucions={solucions} />
        </>
  )
}
