import './ProductChoice.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ProductChoice = ({ colors, color, sizes }) => {

    const [size, setSize] = useState([...new Set(sizes)][0])

    let imageUrl = 'https://training.cleverland.by/shop'

    let handleSize = (event) => {
        size = event.target.value
    }
    console.log('size', size)
    console.log('color', color)
    console.log('colorsPics', colors)
    return (
        <div className="product__choice">
            <div className='product_color'>Color: <span>{color}</span></div>
            <ul className="product__pics_colors">
                {colors.map(item => <li key={item.id}><Link to={'#'} className='product__color_select'><img src={imageUrl + item} alt="color" /></Link></li>)}
            </ul>
            <div className='product_size_block'>
                <div className='product_size'>Size: <span>{size}</span></div>
                <ul className='product_size_choice'>
                    {sizes.map((item) => <li
                        key={item}
                        className="product__size_item">
                        <Link to={'#'}
                            onClick={() => handleSize}
                            value={item}>
                            {item}
                        </Link>
                    </li>
                    )}
                </ul>
            </div>
            <div className="handler"><i className='icon-handler'></i><Link to={'#'}>See guide</Link></div>
        </div>
    )
}
export default ProductChoice