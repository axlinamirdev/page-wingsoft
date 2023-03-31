import Header from '@/components/Header.js';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Header></Header>
    <section className="home_container">
      <div className="home_container_group_logo">
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
          <h2 className="home_service_title">Todos nuestros servicios</h2> 
          <hr className="home_service_line" />
          <section className="home_service__items">
            <div className="home_service__items_card">
              <div className="items_card_image">
                <Image 
                  src="/images/cloud-computing.png"
                  fill
                />
              </div>
              <div className="items_card_body">
                <p className="items_card_title">Cloud Computing</p>
                <p className="items_card_description">Nuestro servicio de Cloud Computing ofrece soluciones en la nube para empresas que buscan una mayor flexibilidad, escalabilidad y seguridad en la gestión de sus aplicaciones y datos. Contamos con expertos que ayudarán a tu empresa a migrar, además de ofrecer servicios de mantenimiento y soporte para que puedas enfocarte en tu negocio sin preocuparte por la gestión de infraestructura.</p>
              </div>
              <div className="items_card_more_link">
                <Link href="/about" legacyBehavior>
                  <a className="items_card_more">Seguir leyendo</a>
                </Link>
              </div>
            </div>
            <div className="home_service__items_card">
              <div className="items_card_image">
                <Image 
                  src="/images/data-analytics.png"
                  fill
                />
              </div>
              <div className="items_card_body">
                <p className="items_card_title">Data Analytics</p>
                <p className="items_card_description">Nuestro servicio de Data Analytics te ayuda a aprovechar al máximo los datos que recopilas en tu empresa. Analizamos grandes conjuntos de datos para identificar patrones y tendencias, y te brindamos información valiosa que te permite tomar decisiones informadas y eficaces para mejorar la rentabilidad y la eficiencia operativa.</p>
              </div>
              <div className="items_card_more_link">
                <Link href="/about" legacyBehavior>
                  <a className="items_card_more">Seguir leyendo</a>
                </Link>
              </div>
            </div>
            <div className="home_service__items_card">
              <div className="items_card_image">
                <Image 
                  src="/images/desarrollo-de-aplicaciones-web.png"
                  fill
                />
              </div>
              <div className="items_card_body">
                <p className="items_card_title">Desarrollo de Aplicaciones Web</p>
                <p className="items_card_description">Creamos aplicaciones web personalizadas que se adaptan a las necesidades de cada cliente, utilizando tecnologías modernas como React, Angular y Vue.js. Nos aseguramos de que las aplicaciones sean escalables, seguras y de alta calidad, y nos encargamos de todo el proceso de desarrollo: desde la planificación hasta el lanzamiento y el mantenimiento continuo.</p>
              </div>
              <div className="items_card_more_link">
                <Link href="/about" legacyBehavior>
                  <a className="items_card_more">Seguir leyendo</a>
                </Link>
              </div>
            </div>
          </section>
          <div className="items_all">
            <Link href="/about" legacyBehavior>
              <a className="items_card_more">Ver todos los servicios</a>
            </Link>
          </div>
      </div>
      <div className="home_project">
          <h2 className="home_project_title">Líder en células de trabajo online para cualquier tipo de desarrollo tecnológico</h2>
      </div>
      <div className="home_type_project">
        <h3 className="home_type_project_title">Tipos de Proyectos que realizamos</h3>
        <p className="home_type_project_description">Egestas eget vestibulum non fermentum vitae eu condimentum neque. Turpis id in convallis et nulla tempor. Nec semper volutpat tortor eget amet nunc viverra ipsum. Non tortor lacus orci quam in leo. Mattis facilisi ipsum viverra volutpat sem scelerisque tellus id.</p>
      </div>
      <div className="home_project_image">
          <Image 
              src="/images/div_home.png"
              fill
            />
      </div>
      <div className="home_project">
          <h2 className="home_project_title" style={{width: '600px'}}>4 Razones que hacen Wingsoft tu mejor opción</h2>
      </div>
      <div className="home_project">
          <h2 className="home_project_title" style={{width: '900px', fontSize: '2.2em', lineHeight: '40px'}}>Estamos certificados para entregar un mejor servicio y calidad en todas nuestras estrategias</h2>
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
      <div className="home_project">
          <h2 className="home_project_title" style={{width: '500px'}}>¿Cómo Wingsoft hace crecer tu empresa?</h2>
      </div>
    </section>
    </>
  )
}
