/**Listado de opciones del mantenedor que se manejan */
const GetDataStrategy = () => {
    let options = [
        {
            id: 1,
            title: '1. Identificación',
            description: 'Nos enfocamos en identificar dónde y cómo una estrategia Cloud Computing puede generar valor en tu negocio.',
            photo: '/images/service-1.png'
        },
        {
            id: 2,
            title: '2. Evaluación',
            description: 'Analizamos el entorno actual de tu compañía y de tus aplicaciones para identificar fortalezas, debilidades y operación.',
            photo: '/images/service-2.png'
        },
        {
            id: 3,
            title: '3. Propuesta de valor',
            description: 'Generamos una propuesta de valor de Cloud Computing sólida, potente y escalable para subir el nivel de tu empresa.',
            photo: '/images/service-3.png'
        },
        {
            id: 4,
            title: '4. Desarrollo',
            description: 'Diseñamos, construimos e implementamos una estrategia Cloud First escalable, rentable y efectiva para tu empresa.',
            photo: '/images/service-4.png'
        }
    ];

    return options;
};

export default GetDataStrategy;