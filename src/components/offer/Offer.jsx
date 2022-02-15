import './Offer.css'
import man from '../../assets/static/man.png'
import woman from '../../assets/static/woman.png'
import Form from '../form/Form'

const Offer = () => {
    return (
        <section className='offer'>
            <div className="container">
                <div className='background'>
                    <h5>Special offer</h5>
                    <h2>Subscribe
                        <br />
                        and <span className='accent'> get 10% off</span>
                    </h2>
                    <Form text='subscribe' classname='column' btnStyle='btnDark' />
                    <div className='offer__man'><img src={man} alt="man" /></div>
                    <div className='offer__woman'><img src={woman} alt="woman" /></div>
                </div>
            </div>
        </section>
    )
}

export default Offer