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
        >
            {slides.map((slide, index) =>
                <SwiperSlide key={index} >
                    <img src={slide} alt="slider" />
                    <div className='campaignTeaser__slider'>
                        <div className="main__slider_text">Banner</div>
                        <h3 className="main__slider_title">your Title text</h3>
                    </div>
                </SwiperSlide>)}
        </Swiper>
    </div>
    )
}

export default MainSlider