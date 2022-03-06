import "./Filter.css"
import { useState, useEffect } from "react"
import FilterCategories from "./FilterCategories/FilterCategories"
import { Link } from "react-router-dom"

const Filter = ({ 
    category, 
    products,
    options ,
    isOpen,
    toggling,
    handleClickOption,
    selectedOption

}) => {
    
    selectedOption = 'isBestseller'

    const [isOpenFilter, setIsOpenFilter] = useState(false)

console.log( options.filter(option=>option.particular===selectedOption)
)
    const showFilter = () => setIsOpenFilter(!isOpenFilter)
    console.log(selectedOption)

    return (
        <div className="container">
            <div className="filter">
                <div className="filter__controls" onClick={showFilter}>
                    <i className="icon-filter"></i>
                    <span>Filter</span>
                </div>
                <div className="filter__view">
                    <i className="icon-menu-def"></i>
                    <i className="icon-view-grid-selected"></i>
                </div>
                <div className="filter__selection">
                    <div className="filter__selection_header" onClick={toggling}>
                        {}
                        <div className="icon">
                            <i className="icon-arrow"></i>
                        </div>
                    </div>
                    {isOpen && (
                        <ul className="custom__select">
                            {options.map(({title,particular}) => (
                                <li key={Math.random()+title}> <Link to='#' onClick={handleClickOption(particular)} >
                                    {title}
                                </Link></li> 
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            {isOpenFilter && <FilterCategories products={products} />}
        </div>
    )
}

export default Filter
