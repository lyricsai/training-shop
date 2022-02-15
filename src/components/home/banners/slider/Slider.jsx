import './Slider.css'
import slider from '../../../../assets/static/girl-slider.jpg'

const MainSlider = () => {
    return (
        <div className="main__slider">
            <img src={slider} alt="slider" />
            <span className="button-left" style={{ left: '3.2%' }}><i className='icon-arrow'></i></span>
            <div className='campaignTeaser__slider'>
                <div className="main__slider_text">Banner</div>
                <h3 className="main__slider_title">your Title text</h3>
            </div>
            <span className="button-right" style={{ right: '3.2%' }}><i className='icon-arrow'></i></span>
        </div>
    )
}

export default MainSlider