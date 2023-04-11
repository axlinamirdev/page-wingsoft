import Image from 'next/image';
import Link from 'next/link';

const CardBlog = ({ title, photo, description }) => {

    return (
        <div className="blog__card">
            <div className="blog__card__photo">
                <Image src={photo} alt={title} fill />
            </div>
            <div className="blog__card__body">
                <p className="blog__card__title">
                    {title}
                </p>
                <p className="blog__card__description">
                    {description}
                </p>
                <div className="blog__card__action">
                    <Link href="/" legacyBehavior>
                        <a className="blog__card__action__link">
                            Seguir leyendo
                        </a>
                    </Link>
                    
                </div>
            </div>
        </div>         
    );
};

export default CardBlog;