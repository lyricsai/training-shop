import './FilterCategories.css'
import { useState, useEffect } from 'react'
import FilterCategory from './FilterCategory/FilterCategory'

const FilterCategories = ({ products }) => {

    // const [activeProducts, setActiveProducts] = useState(products)
    const pricesLevels = ['$1000+', '$600-$100', '$300-$600', '$150-$300', '$50-$150', '$7-$50']

    const [colors, setColors] = useState([])
    const [sizes, setSzes] = useState([])
    const [brands, setBrands] = useState([])
    const [prices, setPrices] = useState(pricesLevels)

    return (

        <div className="filter__categories">
            <div className="container">
                <section className='filter__cat'>
                    <h2>Color</h2>
                    <ul>
                        {colors.map((color, index) => {
                            <FilterCategory parameter={color} id={color + index} key={color + index} type='radio' />
                        })}
                    </ul>
                </section>
                <section className='filter__cat'>
                    <h2>Size</h2>
                    <ul>
                        {sizes.map((size, index) => {
                            <FilterCategory parameter={size} id={size + index} key={size + index} type='checkbox' />
                        })}
                    </ul>
                </section>
                <section className='filter__cat'>
                    <h2>Brand</h2>
                    <ul>
                        {brands.map((brand, index) => {
                            <FilterCategory parameter={brand} id={brand + index} key={brand + index} type='checkbox' />
                        })}
                    </ul>
                </section>
                <section className='filter__cat'>
                    <h2>Price</h2>
                    <ul>
                        {prices.map((price, index) => {
                            <FilterCategory parameter={price} id={price + index} key={price + index} type='checkbox' />
                        })}
                    </ul>
                </section>
            </div>
        </div> 

    )
}
 
    export default FilterCategories