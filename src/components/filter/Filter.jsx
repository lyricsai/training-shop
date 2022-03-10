import './Filter.css'
import { Link } from "react-router-dom"
import classNames from "classnames"
import FilterBlockContainer from './FilterBlock/FilterBlockContainer'
import close from "../../assets/static/icon-close.svg"

const Filter = (
    { category,
        options,
        isOpen,
        toggling,
        handleClickOption,
        selectedOption,
        isOpenFilter,
        togglingFilter,
        products,
        handler,
        prices,
        colors,
        brands,
        sizes,
        activeBrand,
        activeColor,
        activePrice,
        activeSize
    }
) => {

    let tag = options.map((option) => option.particular === selectedOption ? option.title : null)

    let elem = <ul>
        {options.map(({ title, particular }) => (
            <li key={particular}>  <Link to='#'
                className={classNames(".products__cats_item", {
                    selected: particular === selectedOption,
                })}
                area-hidden='true'
                onClick={handleClickOption(particular)}
                data-test-id={`clothes-${category}-${particular}`}
            >
                {title}
            </Link></li>
        ))}
    </ul>


    return (
        <div className="filter__container">
            <div className='filter'>
                <div className="filter__controls"
                    onClick={togglingFilter}
                    data-test-id='filter-button'
                >
                    {isOpenFilter ? <span><img src={close} alt="close" /></span> : <i className='icon-filter'></i>}
                    <span>Filter</span>
                </div>
                <div className="filter__view">
                    <i className='icon-menu-def'></i>
                    <i className='icon-view-grid-selected'></i>
                </div>
                <div
                    className="filter__selection_header"
                    onClick={toggling}>

                    {tag || "Bestsellers"}

                    {isOpen
                        ? <div className="icon" style={{ transform: 'rotate(270deg)' }}>
                            <i className="icon-arrow"></i>
                        </div>
                        : <div className="icon" style={{ transform: 'rotate(90deg)' }}>
                            <i className="icon-arrow" ></i>
                        </div>}
                    {isOpen && elem}
                </div>

            </div>
            <FilterBlockContainer
                products={products}
                category={category}
                isOpenFilter={isOpenFilter}
                togglingFilter={togglingFilter}
                handler={handler}
                prices={prices}
                colors={colors}
                brands={brands}
                sizes={sizes}
                activeColor={activeColor}
                activeSize={activeSize}
                activeBrand={activeBrand}
                activePrice={activePrice}
            />
        </div>
    )
}

export default Filter