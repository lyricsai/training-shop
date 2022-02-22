import { Link } from 'react-router-dom'
import './ClothesHeader.css'

export const ClothesHeader = ({ category }) => {
    return (
        <div className='clothes__header' >
            <span>{category}'s</span>
            <ul className='clothes__cats'>
                <li className='clothes__cats_item'><Link to={`/${category}`} className='_active'>New Arrivals</Link></li>
                <li className='clothes__cats_item'><Link to={`/${category}`}>Specials</Link></li>
                <li className='clothes__cats_item'><Link to={`/${category}`}>Bestsellers</Link></li>
                <li className='clothes__cats_item'><Link to={`/${category}`}>Most Viewed</Link></li>
                <li className='clothes__cats_item'><Link to={`/${category}`}>Featured Product</Link></li>
            </ul>
        </div>
    )
}