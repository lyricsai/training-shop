import { Link } from 'react-router-dom'
import { Discount } from '../discount/Discount'
import Rating from '../rating/Rating'
import './CardItem.css'

const CardItem = ({ item, related }) => {

    let imageUrl = 'https://training.cleverland.by/shop'
    if (related) imageUrl = ''
    let { category, id, discount, images, material, brand, name, particulars, price, rating, reviews, sizes } = item

    console.log(material)
    console.log(brand)
    console.log(particulars)
    console.log(reviews)
    console.log(sizes)
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
                        {discount ? <span className='product__prev_price'>${Math.round(parseInt(price) * 100 / (100 + (parseInt(discount))))}</span> : null}
                        {(discount && related) ? <span className='product__prev_price'>$60.00</span> : null}
                    </span>
                    <span><Rating rating={rating} /></span>
                </div>
            </div>
        </Link>
        // <></>
    )
}

export default CardItem