import { useLocation } from 'react-router'
import { ButtonLight } from '../buttonLight/ButtonLight'
import CardItem from '../cardItem/CardItem'
import { ClothesHeader } from '../clothes-header/ClothesHeader'
import './Clothes.css'
import loading from '../../assets/static/Square-Loading.gif'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'


const Clothes = ({ category, products, options }) => {

    console.log('options', options)

    let filtering = products.filter((product) => {
        return product.particulars.isNewArrivals === true
    })

    const [activeProducts, setActiveProducts] = useState(filtering)


    useEffect(() => {

    }, [setActiveProducts])

    const url = useLocation().pathname
    let elem = null
    let loader
    let styles = { marginTop: 96 }


    url === '/'
        ? elem = <ClothesHeader
            category={category}
            filtering={activeProducts}
            options={options}
        />
        : styles = { marginTop: 0 }


    url === '/'
        ? loader = <ButtonLight text='See all' size={'100%'} />
        : loader = <div className='clothes__loader'><img src={loading} alt="loading..." /></div>


    return (<div className="container">
        <section className='clothes'
            style={styles}
            data-test-id={`clothes-${category}`}>

            {elem}

            <ul className='clothes__products'>

                {activeProducts.map(item => (

                    <li
                        key={`${item.id}-${item.category}`}
                    >
                        <CardItem
                            key={`${item.id}-${item.category}`}
                            item={item}
                        />
                    </li>

                ))}

            </ul>

            {loader}

        </section></div>
    )
}

Clothes.propTypes = {
    category: PropTypes.string,
    products: PropTypes.array,
    options: PropTypes.array,
}


export default Clothes