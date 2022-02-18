import './Slider.css'
import slider from '../../../../assets/static/girl-slider.jpg'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

let slides = [slider, slider, slider]

const MainSlider = () => {
    return (<div className="main__slider">
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {slides.map((slide) =>
                <SwiperSlide>
                    <img src={slide} alt="slider" />
                    <span className="button-left swiper-slide-prev" style={{ left: '3.2%' }}><i className='icon-arrow'></i></span>
                    <div className='campaignTeaser__slider'>
                        <div className="main__slider_text">Banner</div>
                        <h3 className="main__slider_title">your Title text</h3>
                    </div>
                    <span className="button-right swiper-slide-next" style={{ right: '3.2%' }}><i className='icon-arrow'></i></span>
                </SwiperSlide>)}
        </Swiper>
    </div>
    )
}

export default MainSlider