import { Link } from 'react-router-dom'
import './ClothesHeader.css'

export const ClothesHeader = ({ productType }) => {
    return (
        <div className='clothes__header' >
            <span>{productType}'s</span>
            <ul className='clothes__cats'>
                <li className='clothes__cats_item'><Link to={`/${productType}`} className='_active'>New Arrivals</Link></li>
                <li className='clothes__cats_item'><Link to={`/${productType}`}>Specials</Link></li>
                <li className='clothes__cats_item'><Link to={`/${productType}`}>Bestsellers</Link></li>
                <li className='clothes__cats_item'><Link to={`/${productType}`}>Most Viewed</Link></li>
                <li className='clothes__cats_item'><Link to={`/${productType}`}>Featured Product</Link></li>
            </ul>
        </div>
    )
}