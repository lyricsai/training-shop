import './ProductChoice.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import classNames from "classnames"

const ProductChoice = ({ images, sizes }) => {

    let colors = [...new Set(images.map((item) => item.color))]

    let colorLinks = Object.values(images.reduce((acc, item) => {
        return {
            ...acc,
            [item.color]: item.url,
        }
    }, {}))

    const [selectedSize, setSelectedSize] = useState(sizes[0])
    const [selectedColor, setSelectedColor] = useState(colors[0])
    let imageUrl = 'https://training.cleverland.by/shop'

    const handleSize = (value) => () => {
        setSelectedSize(value)
    }
    const handleColor = (value) => () => {
        setSelectedColor([...new Set(images.filter((item) => item.url === value))][0].color)
    }

    return (
        <div className="product__choice">
            <div className='product_color'>Color: <span>{selectedColor}</span></div>
            <ul className="product__pics_colors">
                {colorLinks.map(item => <li
                    className={classNames("product__color_item", {
                        selected: item === selectedColor,
                    })}
                    key={item}>
                    <Link
                        to={'#'}
                        className='product__color_select'
                        onClick={handleColor(item)}>
                        <img src={imageUrl + item} alt="color" title={item.color} />
                    </Link>
                </li>)}
            </ul>
            <div className='product_size_block'>
                <div className='product_size'>Size: <span>{selectedSize}</span></div>
                <ul className='product_size_choice'>
                    {sizes.map((item) => <li
                        key={item}
                        className={classNames("product__size_item", {
                            selected: item === selectedSize,
                        })}>
                        <Link to={'#'}
                            onClick={handleSize(item)}
                            value={item}>
                            {item}
                        </Link>
                    </li>
                    )}
                </ul>
            </div>
            <div className="handler">
                <i className='icon-handler'></i><Link to={'#'}>See guide</Link>
            </div>
        </div>
    )
}
export default ProductChoice