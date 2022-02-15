import { Fragment } from 'react'
import './ProductsHeader.css'
import Filter from '../filter/Filter'
import { Link } from 'react-router-dom'

const ProductsHeader = ({ title }) => {

    return (
        <Fragment>
            <div className='products__header'>
                <div className="container">
                    <div className='products__topBar'>
                        <div className="products__path">
                            <span className='products__path_home'><Link to='/'> Home </Link></span>
                            <span className='products__path_arrow'> ► </span>
                            <span className='product__topBar_active'><Link to={`/${title}`}>{title}</Link></span>
                        </div>
                        <div className="products__share">
                            <i className='icon-share'> </i>
                            <span> Share</span>
                        </div>
                    </div>
                    <h1 className='products__title'>{title}</h1>
                </div></div>
            <Filter />
        </Fragment>
    )
}


export default ProductsHeader