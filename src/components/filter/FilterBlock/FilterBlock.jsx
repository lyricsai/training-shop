import './FilterBlock.css'
import { Fragment } from 'react'


const FilterBlock = (
    {
        category,
        isOpenFilter,
        colors, sizes, brands, prices,
        activeColor, activeSize, activeBrand, activePrice,
        handler
    }

) => {



    return (
        <Fragment>
            {isOpenFilter && <section
                className="filter__block"
                data-test-id={`filters-${category}`}>
                <div className="filter__colors">
                    <h3>Color</h3>
                    <ul data-test-id='filters-color'>
                        {colors.map(color => <li
                            key={color}
                            data-test-id={`filter-${color}-${color}`}
                        >
                            <input type="checkbox"
                                name='coloring'
                                id={color}
                                onChange={handler}
                                value={color}
                            />
                            <label htmlFor={color}>{color}</label></li>)}
                    </ul>
                </div>
                <div className="filter__sizes"><h3>Size</h3>
                    <ul data-test-id='filters-size'>
                        {sizes.map(size => <li
                            key={size}
                            data-test-id={`filter-${size}-${size}`}
                        >
                            <input type="checkbox"
                                onChange={handler}
                                name="sizing"
                                value={sizes}
                                id={size} />
                            <label htmlFor={size}>{size}</label></li>
                        )}
                    </ul></div>
                <div className="filter__brands"><h3>Brand</h3>
                    <ul data-test-id='filters-brand'>
                        {brands.map(brand => <li
                            data-test-id={`filter-${brand}-${brand}`}
                            key={brand}>
                            <input type="checkbox"
                                onChange={handler}
                                value={brand}
                                name="branding"
                                id={brand} />
                            <label htmlFor={brand}>{brand}</label></li>)}
                    </ul></div>
                <div className="filter__prices"><h3>Price</h3>
                    <ul>
                        {prices.map((price) => <li key={price}>
                            <input type="checkbox"
                                onChange={handler}
                                name="pricing"
                                value={price}
                                id={price} />
                            <label htmlFor={price}>{price}</label></li>)}
                    </ul></div>
            </section>}
        </Fragment>
    )
}

export default FilterBlock