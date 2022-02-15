import { useLocation } from 'react-router'
import { ButtonLight } from '../buttonLight/ButtonLight'
import CardItem from '../cardItem/CardItem'
import { ClothesHeader } from '../clothes-header/ClothesHeader'
import './Clothes.css'
import loading from '../../assets/static/Square-Loading.png'

const Clothes = ({ productType, products }) => {

    const url = useLocation().pathname
    let elem = null
    let loader
    let styles = { marginTop: 96 }

    url === '/' ? elem = <ClothesHeader productType={productType} /> : styles = { marginTop: 0 }
    url === '/'
        ? loader = <ButtonLight text='See all' size={'100%'} />
        : loader = <div className='clothes__loader'><img src={loading} alt="loading..." /></div>

    return (<div className="container">
        <section className='clothes'
            style={styles}
            data-test-id={`clothes-${productType}`}>

            {elem}

            <ul className='clothes__products'>
                {products.map(item => (<li
                    key={`${item.id}-${productType}`}
                >
                    <CardItem
                        key={`${item.id}-${productType}`}
                        item={item}
                        productType={productType}
                    />
                </li>))}
            </ul>

            {loader}

        </section></div>
    )
}

export default Clothes