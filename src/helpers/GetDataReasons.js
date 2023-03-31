
/**Listado de opciones del mantenedor que se manejan */
const GetDataReasons = () => {
    let options = [
        {
            id: 1,
            title: 'Asesoría Comercial',
            description: 'Somos un equipo con 14 años de experiencia en el rubro y te asesoramos con visión de negocio en la mejor forma de implementar tu célula.',
            imagen: '/images/asesoria-comercial.svg'
        },
        {
            id: 2,
            title: 'Trabajo ágil',
            description: 'Trabajamos con metodologías y marcos de trabajo ágil que se adaptan a ada tipo de cliente.',
            imagen: "/images/trabajo-agil.svg"
        },
        {
            id: 3,
            title: 'Tecnología Escalable',
            description: 'La tecnología avanza a toda velocidad y junto con ello la manera de desarrollar (API, micro servicios, contenedores, dev ops)',
            imagen: "/images/scalable-technology.svg"
        },
        {
            id: 4,
            title: 'Velocidad',
            description: 'Entendemos la velocidad como una característica que se permite innovar al reducir costos, riesgos y miedo al fracaso.',
            imagen: "/images/speed.svg"
        }
    ];

    return options;
};

export default GetDataReasons;