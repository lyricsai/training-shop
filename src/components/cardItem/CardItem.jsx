import { Link } from 'react-router-dom'
import { Discount } from '../discount/Discount'
import Rating from '../rating/Rating'
import './CardItem.css'

const CardItem = ({ productType, item }) => {
    return (
        <Link
            to={`/${productType}/${item.id}`}
            className='cards-item'
            data-test-id={`clothes-card-${productType}`}
        >
            <div className='img__containter'>
                <img src={item.src} alt="src" />
                <Discount discount={item.discount} discountPrice={item.discountPrice} />
            </div>
            <div className='product__info'>
                <h5 className='product__title'>{item.title}</h5>
                <div className='product__info_bottom'>
                    <span>
                        <span className='product__price'>${item.price}</span>
                        {item.prevPrice ? <span className='product__prev_price'>${item.prevPrice}</span> : null}
                    </span>
                    <span><Rating rating={item.rating} /></span>
                </div>
            </div>

        </Link>
    )
}

export default CardItem