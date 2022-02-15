import './ProductChoice.css'
import { Link } from 'react-router-dom'

const ProductChoice = ({ colors }) => {
    return (
        <div className="product__choice">
            <div className='product_color'>Color: <span>Blue</span></div>
            <ul className="product__pics_colors">
                {colors.map(item => <li key={item.id}><Link to={'#'}><img src={item.src} alt="color" /></Link></li>)}
            </ul>
            <div className='product_size_block'>
                <div className='product_size'>Size: <span>S</span></div>
                <ul className='product_size_choice'>
                    <li className="product__size_item"><Link to={'#'}>XS</Link></li>
                    <li className="product__size_item"><Link to={'#'}>S</Link></li>
                    <li className="product__size_item"><Link to={'#'}>M</Link></li>
                    <li className="product__size_item"><Link to={'#'}>L</Link></li>
                </ul>
            </div>
            <div className="handler"><i className='icon-handler'></i><Link to={'#'}>See guide</Link></div>
        </div>
    )
}
export default ProductChoice