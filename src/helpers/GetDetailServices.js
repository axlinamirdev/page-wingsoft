/**Listado de opciones del mantenedor que se manejan */
const GetDetailServices = () => {
    let options = [
        {
            id: 1,
            title: 'Soluciones de migración de infraestructura en la nube.',
            description: 'Te ayudamos a migrar tus servicios y aplicaciones a la nube para reducir costos y escalar la infraestructura de tus aplicaciones de forma flexible, para desarrollar experiencias digitales innovadoras y mejorar la productividad en tu empresa.',
            photo: '/images/photo-1.png'
        },
        {
            id: 2,
            title: 'Servicios de modernización de aplicaciones',
            description: 'Moderniza y migra tus aplicaciones a la nube para acelerar, escalar e innovar los servicios que ofreces a tus clientes. Aceleramos la transformación digital, agilizamos la capacidad de entrega con entornos híbridos multi-cloud, desarrollamos y desplegamos aplicaciones en tiempo récord.',
            photo: '/images/photo-2.png'
        },
        {
            id: 3,
            title: 'Servicios de soporte en la nube',
            description: 'Nos encargamos de darle a tu empresa soporte técnico para tu infraestructura en la nube, respaldo de información e información detallada sobre el estado y el rendimiento de la nube las 24/7. Ejecutamos buenas prácticas en tus sistemas para proteger tu información.',
            photo: '/images/photo-3.png'
        },
        {
            id: 4,
            title: 'Soluciones de seguridad en la nube con AWS y Azure',
            description: 'Te ayudamos a proteger la seguridad de tus datos con estrategias Cloud Services de seguridad en la nube, hacemos una evaluación de vulnerabilidades para detectar errores en tus sistemas y corregirlos. Garantizamos la seguridad de tus aplicaciones, datos y servicios de infraestructura de nube.',
            photo: '/images/photo-4.png'
        }
    ];

    return options;
};

export default GetDetailServices;