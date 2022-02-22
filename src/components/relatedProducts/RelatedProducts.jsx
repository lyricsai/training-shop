import CardItem from '../cardItem/CardItem'
import './RelatedProducts.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { SlideNextButton, SlidePrevButton } from '../sliderButtons/SliderButtons'


const RelatedProducts = ({ related, category }) => {

    return (
        <section className='products__related'>
            <div className="container">
                <div className='related__top'>
                    <h3 className="product__related_title">Related Products</h3>
                    <div className='related__top_btn'>
                        <SlidePrevButton prev="left: : '3.2%'" />
                        <SlideNextButton next="right: '3.2%'" />
                    </div>
                </div>
                <ul className="product__related">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={4}
                        grabCursor={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        {related.map(item => (<SwiperSlide>
                            <li
                                key={`${item.id}-${category}`}
                            >
                                <CardItem
                                    key={`${item.id}-${category}`}
                                    item={item}
                                    category={category}
                                    related='related'
                                />
                            </li></SwiperSlide>
                        ))}
                    </Swiper>
                </ul>
            </div>
        </section>
    )
}

export default RelatedProducts