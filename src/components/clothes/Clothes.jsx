import { useLocation } from 'react-router'
import { useState, useMemo } from "react"
import { ButtonLight } from '../shared/buttonLight/ButtonLight'
import CardItem from '../cardItem/CardItem'
import { ClothesHeader } from './clothes-header/ClothesHeader'
import './Clothes.css'
import loading from '../../assets/static/Square-Loading.gif'
import PropTypes from 'prop-types'
import ProductsHeader from './products-header/ProductsHeader'

const Clothes = ({ category, products, options }) => {

    const url = useLocation().pathname
    let elem = null
    let loader
    let option
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenFilter, setIsOpenFilter] = useState(false)

    url === '/' ? option = options[0].particular : option = options[2].particular

    const [selectedOption, setSelectedOption] = useState(option)

    let ActiveProducts = products.filter((product) => product.particulars[selectedOption])

    const toggling = () => setIsOpen(!isOpen)

    const handleClickOption = (value) => () => {
        ActiveProducts = products.filter((product) => product.particulars[value])
        setSelectedOption(value)
        setIsOpen(false)
    }
    const togglingFilter = () => setIsOpenFilter(!isOpenFilter)

    const [activeColor, setActiveColor] = useState([])
    const [activeSize, setActiveSize] = useState([])
    const [activeBrand, setActiveBrand] = useState([])
    const [activePrice, setActivePrice] = useState([])
    // const [itemsFound, setItemsFound] = useState(false)

    const handler = (e) => {

        const { target } = e;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const { name } = target

        switch (name) {
            case 'coloring': 
                if (target.checked) {
                    activeColor.push(target.value)
                    setActiveColor([...new Set(activeColor)])
                }
                if (!target.checked) setActiveColor(activeColor.filter(item => item.value!==target.value))
        
            break

            case 'sizing': 
            if (target.checked) {
                activeSize.push(target.value)
                setActiveSize([...new Set(activeSize)])
            }
                if (!target.checked ) setActiveSize(activeSize.filter(item => item.value!==target.value))

                break

            case 'branding': if (target.checked) {
                activeBrand.push(target.value)
                setActiveBrand([...new Set(activeBrand)])
            }
                if (target.checked === false) setActiveSize(activeBrand.filter(item => {
                    if (activeBrand.includes(value)) {
                        return item;
                    } else return false
                }))
            
                break

            case 'pricing': if (target.checked) {
                activePrice.push(target.value)
                setActivePrice([...new Set(activePrice)])
            }
                if (target.checked === false) setActivePrice(activePrice.filter(item => {
                    if (activePrice.includes(value)) {
                        return item;
                    } else return false
                }))

                break

            default: return
        }

    }

    // ActiveProducts = products.filter(product => activeColor.includes((item) => product.images.color === item))

    // console.log(ActiveProducts)

    const colors = useMemo(
        () => [
            ...new Set(
                products
                    .map(item => item.images.map(elem => elem.color))
                    .flat()
            ),
        ],
        [products]
    )
    const sizes = useMemo(
        () => [
            ...new Set(
                products
                    .map(item => item.sizes)
                    .flat()
            ),
        ],
        [products]
    )
    console.log(Array.isArray(sizes))
    const brands = useMemo(
        () => [
            ...new Set(
                products
                    .map(item => item.brand)
                    .flat()
            ),
        ],
        [products]
    )
    const prices = ['$1200+', '$600-$1200', '$300-$600', '$150-300', '$50-150', '$7-50']

    console.log(colors, sizes, brands, prices)










    url === '/'
        ? elem = <ClothesHeader
            toggling={toggling}
            handleClickOption={handleClickOption}
            category={category}
            products={ActiveProducts}
            options={options}
            selectedOption={selectedOption}
            isOpen={isOpen}
            handler={handler}
        />
        : elem = <ProductsHeader
            title={category}
            toggling={toggling}
            handleClickOption={handleClickOption}
            category={category}
            products={ActiveProducts}
            options={options}
            selectedOption={selectedOption}
            isOpen={isOpen}
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
            handler={handler}
        />
    url === '/'
        ? loader = <ButtonLight text='See all' size={'100%'} />
        : loader = <div className='clothes__loader'><img src={loading} alt="loading..." /></div>

    return (<div className="container">
        <section className='clothes'
            data-test-id={`clothes-${category}`}>

            {elem}

            <ul className='clothes__products'>

                {ActiveProducts.map(item => (
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
    options: PropTypes.array
}


export default Clothes