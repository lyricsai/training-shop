import { Link } from 'react-router-dom'
import { Discount } from './discount/Discount'
import Rating from '../main/rating/Rating'
import './CardItem.css'
import PropTypes from 'prop-types'

const CardItem = ({ item, relatedString }) => {

    let imageUrl = 'https://training.cleverland.by/shop'
    let { category, id, discount, images, name, price, rating } = item

    if (relatedString) {
        imageUrl = ''
        category = 'women'
    }
    return (
        <Link
            to={`/${category}/${id}`}
            className='cards-item'
            data-test-id={`clothes-card-${category}`}
        >
            <div className='img__containter'>
                <img src={imageUrl + images[0]?.url} alt="src" />
                <Discount discount={discount} />
            </div>
            <div className='product__info'>
                <h5 className='product__title'>{name}</h5>
                <div className='product__info_bottom'>
                    <span>
                        <span className='product__price'>${price}</span>
                        {discount
                            ? <span className='product__prev_price'>${Math.round(parseInt(price) * 100 / (100 + (parseInt(discount))))}</span>
                            : null}
                        {(discount && relatedString) ? <span className='product__prev_price'>$60.00</span> : null}
                    </span>
                    <span><Rating rating={rating} /></span>
                </div>
            </div>
        </Link>
        // <></>
    )
}
CardItem.propTypes = {
    relatedString: PropTypes.string,
    item: PropTypes.object
}

export default CardItem