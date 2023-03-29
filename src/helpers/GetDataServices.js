/**Listado de opciones del mantenedor que se manejan */
const GetDataServices = () => {
    let options = [
        {
            id: 1,
            title: 'Cloud Computing',
            description: 'Nuestro servicio de Cloud Computing ofrece soluciones en la nube para empresas que buscan una mayor flexibilidad, escalabilidad y seguridad en la gestión de sus aplicaciones y datos. Contamos con expertos que ayudarán a tu empresa a migrar, además de ofrecer servicios de mantenimiento y soporte para que puedas enfocarte en tu negocio sin preocuparte por la gestión de infraestructura.',
            imagen: '/images/cloud-computing.png'
        },
        {
            id: 2,
            title: 'Data Analytics',
            description: 'Nuestro servicio de Data Analytics te ayuda a aprovechar al máximo los datos que recopilas en tu empresa. Analizamos grandes conjuntos de datos para identificar patrones y tendencias, y te brindamos información valiosa que te permite tomar decisiones informadas y eficaces para mejorar la rentabilidad y la eficiencia operativa.',
            imagen: "/images/data-analytics.png"
        },
        {
            id: 3,
            title: 'Desarrollo de Aplicaciones Web',
            description: 'Creamos aplicaciones web personalizadas que se adaptan a las necesidades de cada cliente, utilizando tecnologías modernas como React, Angular y Vue.js. Nos aseguramos de que las aplicaciones sean escalables, seguras y de alta calidad, y nos encargamos de todo el proceso de desarrollo: desde la planificación hasta el lanzamiento y el mantenimiento continuo.',
            imagen: "/images/desarrollo-de-aplicaciones-web.png"
        }
    ];

    return options;
};

export default GetDataServices;