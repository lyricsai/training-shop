import Clothes from "../clothes/Clothes"
import Home from "../home/Home"
import Product from "../product/Product"

import RelatedProducts from "../relatedProducts/RelatedProducts"
import "./Main.css"
import { connect } from "react-redux"
import { useLocation } from "react-router"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"

const Main = ({ page, banners, filtered, options, men, women, collections, payments }) => {

    let url = useLocation().pathname.split("/")[1]
console.log(url)
    let products = {}

    const [category, setCategory] = useState(url)
    const [resourseType, setResourseType] = useState(products)
    const [items, setItems] = useState([])

    useEffect(() => {
        if (url === "women") {
            setCategory("women")
            setResourseType(women)
        } else if (url === "men") {
            setCategory("men")
            setResourseType(men)
        }
    }, [category])

    useEffect((category) => {
        setItems(products[category])
    }, [resourseType])

    category === "women" ? products = women : products = men

    let i = useLocation().pathname.split("/")[2]

    let product = products.filter((item) => item.id === i)[0]

    if (page === "home")
        return (
            <main>
                <Home
                    men={men}
                    women={women}
                    banners={banners}
                    collections={collections}
                    options={options}
                />
            </main>
        )
    else if (page === "product")
        return (
            <main>
                <Product
                    category={category}
                    products={products}
                    product={product}
                    payments={payments}
                />
                <RelatedProducts related={filtered} category={category} />
            </main>
        )
    else if (page === "products")
        return (
            <main>
                <Clothes 
                options={options} 
                category={category} 
                products={products}
                url={url}
                />
            </main>
        )
}

const mapStateToProps = (state, { page }) => {
    return {
        banners: state.main.banners,
        collections: state.main.collections,
        filtered: state.main.filtered,
        options: state.main.options,
        payments: state.main.payments,
        men: state.products.men,
        women: state.products.women,
        page: page,
    }
}

Main.propTypes = {
    banners: PropTypes.array,
    collections: PropTypes.array,
    filtered: PropTypes.array,
    options: PropTypes.array,
    payments: PropTypes.array,
    men: PropTypes.array,
    women: PropTypes.array,
    page: PropTypes.string,
}
export default connect(mapStateToProps)(Main)
