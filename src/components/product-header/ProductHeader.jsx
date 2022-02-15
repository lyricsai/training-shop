import './ProductHeader.css'
import Rating from '../rating/Rating'
import { Link } from 'react-router-dom'


const ProductHeader = ({ products }) => {

    let { available, title, productType, quantity } = products[2]


    return (
        <div className='product__header'>
            <div className='container'>
                <div className='product__topBar'>
                    <div className="products__path">
                        <span className='products__path_home'><Link to='/' >Home</Link> </span>
                        <span className='products__path_arrow'> ► </span>
                        <span className='products__path_home'><Link to={`/${productType}`} >{productType}</Link></span>
                        <span className='products__path_arrow'> ► </span>
                        <span className='products__title_active'>{title}</span>
                    </div>
                    <div className="products__share">
                        <i className='icon-share'> </i>
                        <span> Share</span>
                    </div>
                </div>
                <h1 className='product__title'>{title}</h1>
                <div className='product__bottomBar'>
                    <div>
                        <div className="stars"><Rating /></div>
                        <div className="reviews__count">2 reviews</div>
                    </div>
                    <div>
                        <div className="SKU_count">SKU: <strong>{quantity}</strong>
                        </div>
                        <div className="available">Availability: <strong>{available}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductHeader