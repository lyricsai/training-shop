import { Link } from 'react-router-dom'
import './ClothesHeader.css'
import { useState, useEffect } from 'react'

export const ClothesHeader = ({ category, options }) => {

    console.log('options', options)
    options = []

    const [isOpen, setIsOpen] = useState(false)
    // const [isActive, setIsActive] = useState(options)
    const toggling = () => setIsOpen(!isOpen)
    const [selectedOption, setSelectedOption] = useState(options)

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        //     setIsOpen(false);
    }

    const filter__ul = <ul className='custom__select'>
        {options.map(option => (
            <li
                className='clothes__cats_item'
                onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
            </li>
        ))}
    </ul>

    return (
        <div className='clothes__header' >
            <span>{category}'s</span>
            <div className="filter__selection">
                <div
                    className="filter__selection_header"
                    onClick={toggling}>
                    {selectedOption || "New Arrivals"}
                    <div className='icon'>
                        <i className="icon-arrow"></i>
                    </div></div>
                {
                    window.innerWidth > 900 ? filter__ul : isOpen && filter__ul
                }
            </div>
        </div>
    )
}