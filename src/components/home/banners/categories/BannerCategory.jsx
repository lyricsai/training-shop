import { Link } from 'react-router-dom'
import './BannerCategory.css'
import PropTypes from 'prop-types'

const BannerCategory = ({ src, title }) => {
    title = title.toLowerCase()
    return (

        <div className="main__category">
            <Link to={`/${title}`}>
                <img src={src} alt="pic" />
                <div className='campaignTeaser'>
                    <h4 className="main__cat_title">{title}</h4>
                </div>
            </Link>
        </div>

    )
}
BannerCategory.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
}
export default BannerCategory

