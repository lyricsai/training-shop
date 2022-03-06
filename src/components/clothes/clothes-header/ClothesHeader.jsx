import { Link } from 'react-router-dom'
import './ClothesHeader.css'
import { useState, useEffect } from 'react'
import classNames from 'classnames'

export const ClothesHeader = ({ category, options,ActiveProducts, isOpen,toggling, handleClickOption,selectedOption }) => {

    return (
        <div className='clothes__header' >
            <span>{category}'s</span>
            <div className="clothes_filter__selection">
            
                <div
                    className="clothes_filter__selection_header"
                    onClick={toggling}
                >
                    {selectedOption || "New Arrivals"}
                    <div className='icon'>
                        <i className="icon-arrow"></i>
                    </div>
                </div>

                    {options.map(({ title, particular }) => (
                        <div
                            className={classNames("item", {
                            selected: particular === selectedOption,
                            })}
                            area-hidden
                            key={particular}
                            onClick={handleClickOption(particular)}
                            data-test-id={`clothes-${category}-${particular}`}
                            >
                            {title}
                        </div>
                    ))}

            </div>
        </div>
    )
}