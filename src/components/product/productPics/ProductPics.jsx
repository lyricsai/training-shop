import { useState } from "react"
import { Navigation, Grid, Thumbs, FreeMode, Controller } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import { SlideNextButton, SlidePrevButton } from '../../sliderButtons/SliderButtons'
import './ProductPics.css'
import "swiper/css/thumbs"
import "swiper/css/navigation"
import "swiper/css"

const ProductPics = ({ previewBig, prevs }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    // const [swiper, updateSwiper] = useState(null)

    const previewsBig = [previewBig, previewBig, previewBig, previewBig,]

    return (<>
        <div className="product__pics">
            <div className="product__pics_previews">
                <div className="product__pics_controls">
                    <SlidePrevButton prev={''} />
                    <SlideNextButton next={''} />
                </div>
                <ul className="product__pics_little">
                    <Swiper
                        watchSlidesProgress
                        onSwiper={setThumbsSwiper}
                        style={{
                            "--swiper-navigation-color": "#fff", width: "100px"
                        }}
                        // grid={{ rows: 2, fill: 'row' }}
                        spaceBetween={0}
                        grabCursor={true}
                        navigation={{
                            nextEl: '.product__pics_controls .swiper-button-next',
                            prevEl: '.product__pics_controls .swiper-button-prev',
                        }}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Navigation, Grid, Thumbs, Controller]}
                        slideToClickedSlide={true}
                        slidesPerView="auto"

                    >
                        {prevs.map(item =>
                            <SwiperSlide key={item.id + 'preview'}>
                                <li >
                                    <img src={item.src} alt="prev" />
                                </li>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </ul>
            </div>
            <ul className="product__pics_big">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#000",
                    }}
                    watchSlidesProgress
                    spaceBetween={10}
                    navigation
                    // thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation]}
                    grabCursor={true}
                    className="mySwiper2"
                >
                    {previewsBig.map(item =>
                        <SwiperSlide key={item.id}>
                            <li >
                                <img src={item.src} alt="prev" />
                            </li>
                        </SwiperSlide>
                    )}
                </Swiper>
            </ul>
        </div>
        <style jsx='true'>{`
    .product__pics_little .swiper-wrapper 
        { display: grid;
        grid-template-columns: 94px;
        grid-template-rows: repeat(4, 1fr);
        grid-auto-flow: column;
        margin-top:-20px;
        }
    .product__pics_little .swiper-wrapper  > .swiper-slide {
        height: fit-content;
        padding:8px 16px 8px 0;
        }
        `}
        </style>
    </>
    )
}

export default ProductPics