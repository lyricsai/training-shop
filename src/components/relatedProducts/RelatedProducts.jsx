import CardItem from '../cardItem/CardItem'
import './RelatedProducts.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { SlideNextButton, SlidePrevButton } from '../shared/sliderButtons/SliderButtons'
import PropTypes from 'prop-types'


const RelatedProducts = ({ related, category }) => {

    return (
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
                            460: {
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
    )
}

RelatedProducts.propTypes = {
    category: PropTypes.string,
    related: PropTypes.array
}

export default RelatedProducts