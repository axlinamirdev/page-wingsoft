import Image from 'next/image';


const ItemReasons = ({ title, description, imagen }) => {

    return (
        <div className="home_reasons__item">
            <div className="home_reasons__imagen">
                <Image 
                    src={imagen}
                    fill
                />
            </div>
            <h2 className="home_reasons_title">{title}</h2>
            <p className="home_reasons_description">{description}</p>
        </div>
    )
}

export default ItemReasons;