import ProductHeader from './product-header/ProductHeader'
import './Product.css'
import PropTypes from 'prop-types'
import { ButtonDark } from '../shared/buttonDark/ButtonDark'
import Review from '../main/review/Review'
import review from '../../assets/static/review.svg'
import ProductPics from './productPics/ProductPics'
import ProductChoice from './productChoice/ProductChoice'
import { Fragment } from 'react'
import Rating from '../main/rating/Rating'


const Product = ({ product, payments }) => {
    console.log(product)

    let { category, images, price, material, sizes, rating } = product

    let prevs = images.map((item) => {
        return item.url
    })

    let color = [...new Set(images.map((item) => item.color))]

    let colors = Object.values(images.reduce((acc, item) => {
        return {
            ...acc,
            [item.color]: item.url,
        }
    }, {}))

    console.log(colors)

    return (
        <Fragment>
            <ProductHeader
                product={product}
                category={category}
            />
            <div className="product">
                <div className="container">
                    <ProductPics
                        prevs={prevs}
                    />
                    <div className="product__second_part">
                        <ProductChoice colors={colors} color={color} sizes={sizes} />
                        <div className="product__add_cart">
                            <span className="product__page_price">$ {price}</span>
                            <ButtonDark text={'Add to Card'} padding={'17px 24px 16px'} />
                            <div className="icon__container"><i className="icon-fav"></i></div>
                            <div className="icon__container"><i className="icon-scale-def"></i></div>
                        </div>
                        <div className="product__cart_policy">
                            <div className="cart__policy">
                                <div className="cart__policy_icon"><i className='icon-delivery'></i></div>
                                <div className="cart__policy_title">Shipping & Delivery</div>
                            </div>
                            <div className="cart__policy">
                                <div className="cart__policy_icon"><i className='icon-return'></i></div>
                                <div className="cart__policy_title">Returns & Exchanges</div>
                            </div>
                            <div className="cart__policy">
                                <div className="cart__policy_icon"><i className='icon-mail-footer'></i></div>
                                <div className="cart__policy_title">Ask a question</div>
                            </div>
                        </div>
                        <div>
                            <div className="product__guaranteed">
                                <h5 >guaranteed safe checkout</h5>
                                <div></div>
                            </div>
                            <ul className="product__payments">
                                {payments.map(({ id, src }) => <li key={id}><img src={src} alt="payment" /></li>)}
                            </ul>
                        </div>

                        <h5 className='product__description'>Description</h5>

                        <div className="product__additional">
                            <h5>Additional Information</h5>
                            <p>Color: <span>{color.join(' , ')}</span></p>
                            <p>Size: <span>{sizes.join(' , ')}</span></p>
                            <p>Material: <span>{material}</span></p>
                        </div>
                        <div className="product__reviews">
                            <details open className='reviews__details'>
                                <summary><h5>Reviews</h5> </summary>
                                <div className="reviews__rating">
                                    <div className='reviews__top_flex'>
                                        <Rating rating={rating} />
                                        <span className="reviews__counts"><span> {product.reviews.length} </span>Reviews</span>
                                    </div>
                                    <div className="reviews__add">
                                        <i ><img src={review} alt="review" />Write a review</i>
                                    </div>
                                </div>

                                <ul>
                                    {product.reviews.map(({ id, name, text, time, rating }) =>
                                        <li key={id} >
                                            <Review name={name} review={text} time={time} rating={rating} />
                                        </li>)}
                                </ul>
                            </details>

                        </div>
                    </div>
                </div>
            </div>
            <style jsx='true'>
                {`
                ::-webkit-details-marker {visibility: hidden;}
                    details::marker{
                    visibility: hidden;
                    }
                    .reviews__details summary{ 
                    display:flex; flex-direction:column;
                justify-content: space-between;
                }
                `}
            </style>
        </Fragment >
    )
}

Product.propTypes = {
    preview: PropTypes.array,
    product: PropTypes.object,
    payments: PropTypes.array,
}
export default Product