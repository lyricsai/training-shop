import { React } from 'react'
import "swiper/css/thumbs"
import "swiper/css/navigation"
import "swiper/css"
import PropTypes from 'prop-types'

export const SlideNextButton = ({ next, _class }) => {
    if (!_class) _class = ''

    return (
        <button
            className={`swiper-button-next ${_class}`}
            style={{
                next,
                color: '#121212',
                opacity: 0.6
            }}
        ></button>
    );
}

export const SlidePrevButton = ({ prev, _class }) => {

    if (!_class) _class = ''
    return (
        <button
            className={`swiper-button-prev ${_class}`}
            style={{
                prev,
                color: '#121212',
                opacity: 0.6
            }}
        ></button >
    );
}

SlidePrevButton.propTypes = {
    _class: PropTypes.string,
    prev: PropTypes.string
}
SlideNextButton.propTypes = {
    _class: PropTypes.string,
    next: PropTypes.string
}