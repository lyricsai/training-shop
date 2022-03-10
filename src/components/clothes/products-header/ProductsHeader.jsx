import { Fragment } from "react"
import "./ProductsHeader.css"
import Filter from "../../filter/Filter"
import { Link } from "react-router-dom"

const ProductsHeader = ({
    category,
    products,
    options,
    isOpen,
    toggling,
    handleClickOption,
    selectedOption,
    isOpenFilter,
    togglingFilter,
    handler,
    prices,
    colors,
    brands,
    sizes,
    activeBrand,
    activeColor,
    activePrice,
    activeSize

}) => {

    return (
        <Fragment>
            <div className="products__header">
                <div className="container">
                    <div className="products__topBar">
                        <div className="products__path">
                            <span className="products__path_home">
                                <Link to="/"> Home </Link>
                            </span>
                            <span className="products__path_arrow"> ► </span>
                            <span className="product__topBar_active">
                                <Link to={`/${category}`}>{category}</Link>
                            </span>
                        </div>
                        <div className="products__share">
                            <i className="icon-share"> </i>
                            <span>Share</span>
                        </div>
                    </div>
                    <h1 className="products__title">{category}</h1>
                </div>
            </div>
            <Filter
                handler={handler}
                products={products}
                options={options}
                category={category}
                isOpen={isOpen}
                toggling={toggling}
                handleClickOption={handleClickOption}
                selectedOption={selectedOption}
                isOpenFilter={isOpenFilter}
                togglingFilter={togglingFilter}
                prices={prices}
                colors={colors}
                brands={brands}
                sizes={sizes}
                activeColor={activeColor}
                activeSize={activeSize}
                activeBrand={activeBrand}
                activePrice={activePrice}
            />
        </Fragment>
    )
}

export default ProductsHeader
