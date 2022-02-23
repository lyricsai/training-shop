import ProductHeader from '../product-header/ProductHeader'
import './Product.css'
import PropTypes from 'prop-types'
import { ButtonDark } from '../buttonDark/ButtonDark'
import Review from '../review/Review'
import review from '../../assets/static/review.svg'
import ProductPics from './productPics/ProductPics'
import ProductChoice from './productChoice/ProductChoice'
import { Fragment } from 'react'


const Product = ({ product, preview, payments }) => {

    let { category, images, price, material, sizes } = product

    let prevs = preview.slice(1, 5)
    let colors = preview.slice(5, 9)

    return (
        <Fragment>
            <ProductHeader
                product={product}
                category={category}
            />
            <div className="product">
                <div className="container">
                    <ProductPics
                        previewBig={images[0].url}
                        prevs={prevs}
                    />
                    <div className="product__second_part">
                        <ProductChoice colors={colors} color={images[0].color} sizes={sizes} />
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
                            <p>Color: <span>{images[0].color}</span></p>
                            <p>Size: <span>{sizes.join(' , ')}</span></p>
                            <p>Material: <span>{material}</span></p>
                        </div>

                        <div className="product__reviews">
                            <h5>Reviews</h5>
                            <div className="reviews__rating">
                                <div>
                                    <span className="stars">
                                        <i className="icon-star rating__star "></i>
                                        <i className="icon-star rating__star "></i>
                                        <i className="icon-star rating__star "></i>
                                        <i className="icon-star rating__star "></i>
                                        <i className="icon-star rating__star "></i>
                                    </span>
                                    <span className="reviews__counts"><span> {product.reviews.length} </span>Reviews</span>
                                </div>
                                <div className="reviews__add">
                                    <i ><img src={review} alt="review" />Write a review</i>
                                </div>
                            </div>
                            <ul>
                                {product.reviews.map(({ id, name, text, time, rating }) =>
                                    <li key={id}>
                                        <Review name={name} review={text} time={time} rating={rating} />
                                    </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

Product.propTypes = {
    preview: PropTypes.array,
    product: PropTypes.object,
    payments: PropTypes.array,
}
export default Product