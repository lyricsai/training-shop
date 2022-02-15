import './FooterBottom.css'
import stripe from '../../../assets/payments/stripe.png'
import aes from '../../../assets/payments/AES.png'
import amerExpress from '../../../assets/payments/american-express.png'
import discover from '../../../assets/payments/discover.png'
import mastercard from '../../../assets/payments/mastercard.png'
import paypal from '../../../assets/payments/paypal.png'
import visa from '../../../assets/payments/visa.png'

const payments = [stripe, aes, paypal, visa, mastercard, discover, amerExpress]

const FooterBottom = () => {
    return (
        <div className='footer__bottom'>
            <div className="container">
                <div className='footer__copyright'>Copyright © 2032 all rights reserved</div>
                <div className='footer__payments'>
                    {payments.map((e, i) => (<img src={e} alt="i" key={i} />))}
                </div>
                <div className='footer__website'>Clevertec.ru/training</div>
            </div></div>
    )
}
export default FooterBottom