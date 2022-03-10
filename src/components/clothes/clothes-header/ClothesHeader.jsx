import { Link } from "react-router-dom"
import "./ClothesHeader.css"
import { useState, useEffect } from "react"
import classNames from "classnames"

export const ClothesHeader = ({
    category,
    options,
    isOpen,
    toggling,
    handleClickOption,
    selectedOption,
}) => {

    const [isBigScreen, setIsBigScreen] = useState(window.innerWidth > 900)

    const handleResize = () => {
        if (window.innerWidth < 900) {
            setIsBigScreen(false)
        } else {
            setIsBigScreen(true)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => { window.removeEventListener("resize", handleResize) }
    })

    let tag = options.map((option) => option.particular === selectedOption ? option.title : null)

    let styles = { marginTop: 96 }

    let elem = <ul>
        {options.map(({ title, particular }) => (
            <li key={particular}>  <Link to="/"
                className={classNames(".clothes__cats_item", {
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
        <div className="clothes__header" style={styles}>
            <span>{category}'s</span>
            <div className="clothes_filter__selection">
                <div
                    className="clothes_filter__selection_header"
                    onClick={toggling}>

                    {tag || "New Arrivals"}

                    <div className="icon">
                        <i className="icon-arrow"></i>
                    </div>
                </div>

                {isBigScreen
                    ? elem
                    : isOpen && elem}
            </div>
        </div>
    )
} 