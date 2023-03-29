import Header from '@/components/Header.js';
import CardItem from '@/components/home/Carousel-main/CardItem';
import CardService from '@/components/home/Services/CardService';
import CardTypeProject from '@/components/home/TypeProject/CardTypeProject';
import ItemReasons from '@/components/home/Reasons/ItemReasons';
import Image from 'next/image';
import Link from 'next/link';

import GetDataServices from '@/helpers/GetDataServices';
import GetDataReasons from '@/helpers/GetDataReasons';

export default function Home() {
    const services = GetDataServices();
    const reasons = GetDataReasons();

  return (
    <>
    <Header></Header>
    <section className="home">
        <CardItem />
        <div className="home_group_logo">
            <div className="logo">
                <Image 
                src="/images/logo/express-lider.svg"
                width={120}
                height={80}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/logo/vidacamara.svg"
                width={120}
                height={80}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/logo/pvblic.svg"
                width={120}
                height={80}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/logo/betazeta.svg"
                width={120}
                height={80}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/logo/mega.svg"
                width={120}
                height={80}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/logo/homecenter.svg"
                width={120}
                height={80}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/logo/universidad.svg"
                width={120}
                height={80}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/logo/gobierno-chile.svg"
                width={120}
                height={80}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/logo/grunenthal.svg"
                width={120}
                height={80}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/logo/naciones.svg"
                width={120}
                height={80}
                />
            </div>
        </div> 
        <div className="home_service">
          <h2 className="home_title">Todos nuestros servicios</h2> 
          <hr className="home_service_line" />
          <section className="home_service__items">
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
        </div>

        <div className="home_title_containter">
            <h2 className="home_title_h2">Líder en células de trabajo online para cualquier tipo de desarrollo tecnológico</h2>
        </div>
        <div className="home_type_project">
            <h3 className="home_type_project_title">Tipos de Proyectos que realizamos</h3>
            <p className="home_type_project_description">Egestas eget vestibulum non fermentum vitae eu condimentum neque. Turpis id in convallis et nulla tempor. Nec semper volutpat tortor eget amet nunc viverra ipsum. Non tortor lacus orci quam in leo. Mattis facilisi ipsum viverra volutpat sem scelerisque tellus id.</p>
        </div>
        <div className="home_project_container">
            <CardTypeProject />
        </div>
        <div className="home_title_containter">
            <h2 className="home_title_h2">4 Razones que hacen <br /> Wingsoft tu mejor opción</h2>
        </div>
        <div className="home_reasons">
            {
                reasons.length>0 &&
                reasons.map((item, key) =>
                    <ItemReasons key={key} {...item} />
                )
            }
        </div>
        <div className="home_title_containter home_title_containter--option">
            <h2 className="home_title_h2">Estamos certificados para entregar un mejor servicio <br /> y calidad en todas nuestras estrategias</h2>
        </div>
        <div className="home_brand">
            <div className="logo">
                <Image 
                src="/images/cliente/microsoft.svg"
                width={150}
                height={50}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/cliente/google.svg"
                width={150}
                height={50}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/cliente/mailchimp.svg"
                width={150}
                height={50}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/cliente/shopify.svg"
                width={150}
                height={50}
                />
            </div>
            <div className="logo">
                <Image 
                src="/images/cliente/facebook.svg"
                width={150}
                height={50}
                />
            </div>
        </div>
        <div className="home_title_containter home_title_containter--option">
            <h2 className="home_title_h2">¿Cómo Wingsoft hace <br />crecer tu empresa?</h2>
        </div>
        <div className="home_title_containter home_title_containter--option">
            <h2 className="home_title_h2">El testimonio de nuestros clientes<br />habla por nosotros</h2>
        </div>
    </section>
    </>
  )
}
