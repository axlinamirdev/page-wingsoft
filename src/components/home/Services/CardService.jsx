import Link from 'next/link';
import Image from 'next/image';

const CardService = ({ title, description, imagen, url}) => {

    return (
        <div className="service__card">
              <div className="service__card__image">
                <Image 
                  src={imagen}
                  fill
                />
              </div>
              <div className="service__card__body">
                <p className="service__card__title">{title}</p>
                <p className="service__card__description">{description}</p>
              </div>
              <div className="service__card__more_link">
                <Link href="/about" legacyBehavior>
                  <a className="service__card__more">Seguir leyendo</a>
                </Link>
              </div>
        </div>
    );
};

export default CardService;