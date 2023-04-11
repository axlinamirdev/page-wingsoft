import Image from 'next/image';

const CardStrategy = ({ title, description, photo }) => {

    return (
        <div className="services_main__options__card">
            <div className="services_main__options__photo">
                <Image 
                    src={photo}
                    alt={title}
                    fill
                />
            </div>
            <div className="services_main__options__body">
                <h3 className="services_main__options__title">
                    {title}
                </h3>
                <p className="services_main__options__description">
                    {description}
                </p> 
            </div>
        </div>
    );
};

export default CardStrategy;