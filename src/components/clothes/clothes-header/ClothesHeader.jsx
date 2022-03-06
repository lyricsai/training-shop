import { Link } from "react-router-dom"
import "./ClothesHeader.css"
import { useState, useEffect } from "react"
import classNames from "classnames"

export const ClothesHeader = ({
    category,
    options,
    ActiveProducts,
    isOpen,
    toggling,
    handleClickOption,
    selectedOption,
}) => {
    let tag = options.map((option) => {
        if (option.particular === selectedOption) return option.title
    })
    let styles = {marginTop:96}

    return (
        <div className="clothes__header"    style={styles}>
            <span>{category}'s</span>
            <div className="clothes_filter__selection">
                {/* <div className="clothes_filter__selection_header" onClick={toggling}>
                    {tag || "New Arrivals"}
                    <div className="icon">
                        <i className="icon-arrow"></i>
                    </div>
                </div> */}

                {options.map(({ title, particular }) => (
                    <a
                        className={classNames(".clothes__cats_item", {
                            selected: particular === selectedOption,
                        })}
                        area-hidden
                        key={particular}
                        onClick={handleClickOption(particular)}
                        data-test-id={`clothes-${category}-${particular}`}
                    >
                        {title}
                    </a>
                ))}
            </div>
        </div>
    )
}
