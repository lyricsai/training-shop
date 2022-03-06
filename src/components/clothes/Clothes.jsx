import { useLocation } from "react-router"
import { ButtonLight } from "../shared/buttonLight/ButtonLight"
import CardItem from "../cardItem/CardItem"
import { ClothesHeader } from "./clothes-header/ClothesHeader"
import "./Clothes.css"
import loading from "../../assets/static/Square-Loading.gif"
import PropTypes from "prop-types"
import { useState, useEffect } from "react"

const Clothes = ({ category, products, options }) => {
    let initialProducts = products.filter((product) => product.particulars["isNewArrivals"])

    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0].title)
    const [ActiveProducts, setActiveProducts] = useState(initialProducts)

    console.log(options[0].particular)
    console.log(products.filter((product) => product.particulars[selectedOption]))
    console.log(ActiveProducts)
    console.log("selectedOption", selectedOption)

    const toggling = () => setIsOpen(!isOpen)

    const handleClickOption = (value) => () => {
        setActiveProducts(products.filter((product) => product.particulars[value]))
        setSelectedOption(value)
        setIsOpen(false)
    }

    const url = useLocation().pathname
    let elem = null
    let loader
    let styles = { marginTop: 96 }

    url === "/"
        ? (elem = (
              <ClothesHeader
                  options={options}
                  filtering={ActiveProducts}
                  handleClickOption={handleClickOption}
                  toggling={toggling}
                  isOpen={isOpen}
                  selectedOption={selectedOption}
                  category={category}
              />
          ))
        : (styles = { marginTop: 0 })

    url === "/"
        ? (loader = <ButtonLight text="See all" size={"100%"} />)
        : (loader = (
              <div className="clothes__loader">
                  <img src={loading} alt="loading..." />
              </div>
          ))

    return (
        <div className="container">
            <section className="clothes" style={styles} data-test-id={`clothes-${category}`}>
                {elem}

                <ul className="clothes__products">
                    {ActiveProducts.map((item) => (
                        <li key={`${item.id}-${item.category}`}>
                            <CardItem key={`${item.id}-${item.category}`} item={item} />
                        </li>
                    ))}
                </ul>

                {loader}
            </section>
        </div>
    )
}

Clothes.propTypes = {
    category: PropTypes.string,
    products: PropTypes.array,
    options: PropTypes.array,
}

export default Clothes
