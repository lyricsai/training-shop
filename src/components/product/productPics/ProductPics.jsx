import { useState } from "react"
import { Navigation, FreeMode, Controller } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import { SlideNextButton, SlidePrevButton } from '../../sliderButtons/SliderButtons'
import './ProductPics.css'
import "swiper/css/thumbs"
import "swiper/css/navigation"
import "swiper/css"
import PropTypes from 'prop-types'

const ProductPics = ({ prevs }) => {

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    const previewsBig = prevs
    let imageUrl = 'https://training.cleverland.by/shop'

    return (<>
        <div className="product__pics" data-test-id='product-slider'>
            <div className="product__pics_previews">
                <div className="product__pics_controls">
                    <SlidePrevButton _class='product__pics_controls' />
                    <SlideNextButton _class='product__pics_controls' />
                </div>
                <ul className="product__pics_little">
                    <Swiper
                        watchSlidesProgress
                        onSwiper={setFirstSwiper}
                        controller={{ control: secondSwiper }}
                        style={{
                            "--swiper-navigation-color": "#121212",
                            transform: "translate3d(0, 0, 0) !important"
                        }}
                        spaceBetween={10}
                        grabCursor={true}
                        navigation={{
                            nextEl: '.product__pics_controls.swiper-button-next',
                            prevEl: '.product__pics_controls.swiper-button-prev',
                        }}
                        virtualTranslate={true}
                        centeredSlides={true}
                        modules={[Navigation, Controller]}
                        slideToClickedSlide={true}
                        slidesPerView={4}
                        direction={'vertical'}
                        watchOverflow={true}
                    >
                        {prevs.map((item, index) =>
                            <SwiperSlide key={index + 'preview'} >
                                <li >
                                    <img src={imageUrl + item} alt="prev" />
                                </li>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </ul>
            </div>
            <ul className="product__pics_big">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#000"
                    }}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                    watchSlidesProgress
                    spaceBetween={10}
                    navigation
                    modules={[FreeMode, Navigation, Controller]}
                    grabCursor={true}
                    className="mySwiper2"
                >
                    {previewsBig.map((item, index) =>
                        <SwiperSlide key={index + 'big'}>
                            <li >
                                <img src={imageUrl + item} alt="prev" />
                            </li>
                        </SwiperSlide>
                    )}
                </Swiper>
            </ul>
        </div>
    </>
    )
}

ProductPics.propTypes = {
    prevs: PropTypes.array,
    previewBig: PropTypes.string
}

export default ProductPics