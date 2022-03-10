import './Banners.css'
import BannerCategory from './categories/BannerCategory'
import MainSlider from './slider/Slider'
import { Fragment } from 'react'


const Banners = ({ banners }) => {
    return (
        <Fragment>
            <div className="main__banners">
                <div className="container">
                    <MainSlider />
                    {banners.map(({ src, title, id }) => <BannerCategory key={id} title={title} src={src} />)}
                </div>
            </div>
        </Fragment>
    )
}

export default Banners