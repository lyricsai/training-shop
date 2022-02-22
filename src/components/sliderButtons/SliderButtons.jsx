import './SliderButtons.css'
import { useSwiper } from 'swiper/react'
import "swiper/css/thumbs"
import "swiper/css/navigation"
import "swiper/css"

export const SlideNextButton = (next) => {
    const swiper = useSwiper();

    return (
        <button
            className="swiper-button-next"
            style={{
                next,
                color: '#121212',
                opacity: 0.6
            }}
            onClick={() => swiper.slideNext(300)}
        ></button>
    );
}

export const SlidePrevButton = (prev) => {

    const swiper = useSwiper();

    return (
        <button
            className="swiper-button-prev"
            style={{
                prev,
                color: '#121212',
                opacity: 0.6
            }}
            onClick={() => swiper.slidePrev(300)}
        ></button >
    );
}
