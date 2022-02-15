const ProductCart = (props) => {
    return (
        <section className="cart__product">
            <div><img src="/" alt="img" /></div>
            <div>
                <h4 className="cart__title">Women's tracksuit Q109</h4>
                <h5 className="cart__size">Blue, S</h5>
                <span className="cart__minus">-</span>
                <span className="cart__quantity">1</span>
                <span className="cart__plus">+</span>
                <span className="cart__price">$379.99</span>
                <span className="icon-delete">delete</span>
            </div>
        </section>
    )
}
export default ProductCart