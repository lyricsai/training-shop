import './Cart.css'
import ProductCart from './product-cart/ProductCart'


const Cart = () => {
    return (
        <div className='cart'>
            <div className='cart__header'>
                <h4 className='cart__title'>Shopping Cart</h4>
                <span><i className='icon-close'></i></span>
            </div>
            <div><span className='inCart'>Item in Cart </span>/<span className='deliveryInfo'> Delivery Info</span>/<span className='paymentInfo'> Payment</span></div>
            <form>
                <ProductCart />
                <div className='cart__total'><span>Total</span><span>$433.99</span></div>
                <button className='button__black'>Futher</button>
                <button className='button__gray'>View Cart</button>
            </form>
        </div>
    )
}

export default Cart