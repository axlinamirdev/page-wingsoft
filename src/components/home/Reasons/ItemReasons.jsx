import Image from 'next/image';


const ItemReasons = ({ title, description, imagen }) => {

    return (
        <div className="reasons__container__item">
            <div className="reasons__container__imagen">
                <Image 
                    src={imagen}
                    alt={title}
                    fill
                />
            </div>
            <h2 className="reasons__container__title">{title}</h2>
            <p className="reasons__container__description">{description}</p>
        </div>
    )
}

export default ItemReasons;