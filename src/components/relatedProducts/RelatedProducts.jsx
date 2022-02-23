import CardItem from '../cardItem/CardItem'
import './RelatedProducts.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { SlideNextButton, SlidePrevButton } from '../sliderButtons/SliderButtons'
import PropTypes from 'prop-types'
import { Fragment } from 'react'


const RelatedProducts = ({ related, category }) => {

    return (
        <Fragment>
            <section className='products__related' data-test-id='related-slider'>
                <div className="container">
                    <div className='related__top'>
                        <h3 className="product__related_title">Related Products</h3>
                        <div className='related__top_btn'>
                            <SlidePrevButton prev="left: : '3.2%'" _class={'relatedPrev'} />
                            <SlideNextButton next="right : '3.2%'" _class={'relatedNext'} />
                        </div>
                    </div>
                    <ul className="product__related">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={4}
                            grabCursor={true}
                            navigation={{
                                nextEl: '.swiper-button-next.relatedNext',
                                prevEl: '.swiper-button-prev.relatedPrev',
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1
                                },
                                560: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                    height: '100%'
                                },
                                900: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1110: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {related.map(item => (<SwiperSlide key={`${item.id}-${category}-slide`} >
                                <li
                                    className='li_cards-item'
                                    key={`${item.id}-${category}`}
                                >
                                    <CardItem
                                        key={`${item.id}-${category}`}
                                        item={item}
                                        category={category}
                                        relatedString='related'
                                    />
                                </li></SwiperSlide>
                            ))}
                        </Swiper>
                    </ul>
                </div>
            </section>
            <style jsx='true'>
                {`
            .li_cards-item{
            display:flex;
            justify-content:center;
        }`
                }
            </style>
        </Fragment>
    )
}

RelatedProducts.propTypes = {
    category: PropTypes.string,
    related: PropTypes.array
}

export default RelatedProducts