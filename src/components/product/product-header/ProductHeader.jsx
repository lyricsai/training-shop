import "./ProductHeader.css"
import Rating from "../../main/rating/Rating"
import { Link } from "react-router-dom"

const ProductHeader = ({ product, category }) => {
    let { available = "in stock", name, quantity = 777 } = product

    return (
        <div className="product__header">
            <div className="container">
                <div className="product__topBar">
                    <div className="products__path">
                        <span className="products__path_home">
                            <Link to="/">Home</Link>{" "}
                        </span>
                        <span className="products__path_arrow"> ► </span>
                        <span className="products__path_home">
                            <Link to={`/${category}`}>{category}</Link>
                        </span>
                        <span className="products__path_arrow"> ► </span>
                        <span className="products__title_active">{name}</span>
                    </div>
                    <div className="products__share">
                        <i className="icon-share"> </i>
                        <span> Share</span>
                    </div>
                </div>
                <h1 className="product__title">{name}</h1>
                <div className="product__bottomBar">
                    <div>
                        <div className="stars">
                            <Rating rating={product.rating} />
                        </div>
                        <div className="reviews__count">{product.reviews.length} reviews</div>
                    </div>
                    <div>
                        <div className="SKU_count">
                            SKU: <strong>{quantity}</strong>
                        </div>
                        <div className="available">
                            Availability: <strong>{available}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductHeader
