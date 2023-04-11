/**Listado de opciones del mantenedor que se manejan */
const GetTypeService = () => {
    let options = [
        {
            id: 1,
            title: 'Plataformas web y mobile apps',
            description: 'Construimos aplicaciones móviles y web ágiles, innovadoras, con una experiencia de usuario increíble y de fácil escalabilidad con infraestructura Serverless y cultura DevOps.',
            imagen: '/images/type-project-1.png'
        },
        {
            id: 2,
            title: 'Proyectos IoT',
            description: 'Proporcionamos soluciones para el futuro, incluyendo servicios de consultoría de IoT, diseño y fabricación de dispositivos y aplicaciones específicas, desarrollo e integración de tecnología llave en mano, análisis de datos y automatización de procesos.',
            imagen: '/images/type-project-2.png'
        },
        {
            id: 3,
            title: 'Inteligencia artificial',
            description: 'Aprovechamos el potencial de los datos y la IA para convertirlos en aliados de tu estrategia de futuro. Somos un equipo multidisciplinario de personas especializadas en desarrollo de software, Inteligencia Artificial, diseño y gestión de infraestructuras y análisis de datos.',
            imagen: '/images/type-project-3.png'
        },
        {
            id: 4,
            title: 'Blockchain',
            description: 'La descentralización está empezando a encontrar su aplicación en todos los sectores. Si bien esta tecnología tiene el potencial de transformar procesos empresariales (haciendo que sean más eficientes, ágiles, seguros, transparentes y rentables), muchas empresas tienen más preguntas que respuestas. Nosotros podemos ayudar.',
            imagen: '/images/type-project-4.png'
        }
    ];

    return options;
};

export default GetTypeService;