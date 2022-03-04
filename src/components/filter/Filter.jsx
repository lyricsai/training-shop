import './Filter.css'
import { useState, useEffect } from 'react'
import FilterCategories from './FilterCategories/FilterCategories'
// import { connect } from 'react-redux'


const Filter = ({ products, options }) => {
    console.log(options)

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenFilter, setIsOpenFilter] = useState(false)

    const toggling = () => setIsOpen(!isOpen)
    const showFilter = () => setIsOpenFilter(!isOpenFilter)

    const [selectedOption, setSelectedOption] = useState(options[2])

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
    }

    return (
        <div className="container">
            <div className='filter'>
                <div className="filter__controls" onClick={showFilter}>
                    <i className='icon-filter'></i>
                    <span>Filter</span>
                </div>
                <div className="filter__view">
                    <i className='icon-menu-def'></i>
                    <i className='icon-view-grid-selected'></i>
                </div>
                <div className="filter__selection">
                    <div
                        className="filter__selection_header"
                        onClick={toggling}>
                        {selectedOption || "Bestsellers"}
                        <div className='icon'><i className="icon-arrow"></i></div></div>
                    {isOpen && (
                        <ul className='custom__select'>
                            { options.map(option => (
                                <li onClick={onOptionClicked(option)} key={Math.random()}>
                                    {option}
                                </li>
                            ))}</ul>
                    )}
                </div>
            </div>
            { isOpenFilter && <FilterCategories products={products} />}
        </div>
    )
}


export default Filter