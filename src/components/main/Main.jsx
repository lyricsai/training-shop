import Clothes from '../clothes/Clothes'
import Home from '../home/Home'
import Product from '../product/Product'
import ProductsHeader from '../products-header/ProductsHeader'
import RelatedProducts from '../relatedProducts/RelatedProducts'
import './Main.css'
import { connect } from 'react-redux'
import { useLocation } from 'react-router'
import PropTypes from 'prop-types'

const Main = ({
    page,
    banners,
    filtered,
    options,
    men,
    women,
    collections,
    payments }) => {

    console.log('options', options)

    let url = useLocation().pathname.split('/')[1]

    let products = {}
    let category
    if (url === 'women') category = 'women'
    else if (url === 'men') category = 'men'
    category === 'women' ? products = women : products = men

    let i = useLocation().pathname.split('/')[2]

    let product = products.filter((item) => item.id === i)[0]

    if (page === 'home') return (
        <main>
            <Home
                men={men}
                women={women}
                banners={banners}
                collections={collections} />
        </main>)

    else if (page === 'product') return (
        <main>
            <Product
                category={category}
                products={products}
                product={product}
                payments={payments}
            />
            <RelatedProducts
                related={filtered}
                category={category} />
        </main>)

    else if (page === 'products') return (
        <main>
            <ProductsHeader
                title={category}
                products={products}
                options={options}
            />
            <Clothes
                options={options}
                category={category}
                products={products}
            />
        </main>
    )
}

const mapStateToProps = (state, { page }) => {
    return {
        banners: state.main.banners,
        collections: state.main.collections,
        filtered: state.main.filtered,
        options: state.main.options,
        payments: state.main.payments,
        men: state.products.men,
        women: state.products.women,
        page: page
    }
}

Main.propTypes = {
    banners: PropTypes.array,
    collections: PropTypes.array,
    filtered: PropTypes.array,
    options: PropTypes.array,
    payments: PropTypes.array,
    men: PropTypes.array,
    women: PropTypes.array,
    page: PropTypes.string,
}
export default connect(mapStateToProps)(Main)