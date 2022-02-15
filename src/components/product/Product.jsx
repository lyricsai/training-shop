import ProductHeader from '../product-header/ProductHeader'
import './Product.css'

import { ButtonDark } from '../buttonDark/ButtonDark'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../redux/reducers/mainReducer'
import Review from '../review/Review'
import review from '../../assets/static/review.svg'
import ProductPics from './productPics/ProductPics'
import ProductChoice from './productChoice/ProductChoice'
import { Fragment } from 'react'

const Product = ({ products, preview, payments, reviews, productType }) => {


    let [previewBig] = preview
    let prevs = preview.slice(1, 5)
    let colors = preview.slice(5, 9)

    return (
        <Fragment>
            <ProductHeader
                products={products}
                productType={productType}
            />
            <div className="product">
                <div className="container">
                    <ProductPics
                        previewBig={previewBig}
                        prevs={prevs}
                    />
                    <div className="product__second_part">

                        <ProductChoice colors={colors} />
                        <div className="product__add_cart">
                            <span className="product__page_price">$ 379.99</span>
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
                            <p>Color: <span>Blue, White, Black, Grey</span></p>
                            <p>Size: <span>XS, S, M, L</span></p>
                            <p>Material: <span>	100% Polyester</span></p>
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
                                    <span className="reviews__counts"><span> 2 </span>Reviews</span>
                                </div>
                                <div className="reviews__add">
                                    <i ><img src={review} alt="review" />Write a review</i>
                                </div>
                            </div>
                            <ul>
                                {reviews.map(({ id, name, review, time, rating }) => <li key={id}><Review name={name} review={review} time={time} rating={rating} /></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default connect(mapStateToProps)(Product)