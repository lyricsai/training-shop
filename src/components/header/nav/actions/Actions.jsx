import './Actions.css'

const Actions = () => {
    return (

        <ul className="header__actions">
            <li><i className="icon-search"></i></li>
            <li><i className="icon-globe"></i></li>
            <li><i className="icon-user"></i></li>
            <li className="cart__container"><i className="icon-cart"></i><span className="js_cart_quantity"><span>2</span>
            </span></li>
        </ul>
    )
}

export default Actions