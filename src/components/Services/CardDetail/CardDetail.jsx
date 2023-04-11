import Image from 'next/image';

const CardDetail = ({ title, description, photo }) => {

    return (
        <div className="services_home_item__card">
            <div className="services_home_item__left">
                <p className="services_home_item__title">
                    {title}
                </p>  
                <p className="services_home_item__description">
                    {description}
                </p>    
            </div>
            <div className="services_home_item__right">
                <div className="services_home_item__photo">
                    <Image 
                        src={photo}
                        alt={title}
                        fill
                    />
                </div>
            </div>
        </div>
    );
};

export default CardDetail;