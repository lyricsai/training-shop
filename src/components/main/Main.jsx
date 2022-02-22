import Clothes from '../clothes/Clothes'
import Home from '../home/Home'
import Product from '../product/Product'
import ProductsHeader from '../products-header/ProductsHeader'
import RelatedProducts from '../relatedProducts/RelatedProducts'
import './Main.css'
import { connect } from 'react-redux'
import { useLocation } from 'react-router'

const Main = (
    { page, banners, filtered, related, preview, men, women, collections }
) => {


    const url = useLocation().pathname
    let products = {}
    let category
    url === '/women' ? category = 'women' : category = 'men'
    category === 'women' ? products = women : products = men

    if (page === 'home') return (
        <main>
            <Home men={men} women={women} banners={banners} collections={collections} />
        </main>)

    else if (page === 'product') return (
        <main>
            <Product
                category={category}
                products={products}
                preview={preview}
            />
            <RelatedProducts related={filtered} category={category} />
        </main>)

    else if (page === 'products') return (
        <main>
            <ProductsHeader title={category} />
            <Clothes
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
        preview: state.main.preview,
        payments: state.main.payments,
        reviews: state.main.reviews,
        men: state.products.men,
        women: state.products.women,
        page: page
    }
}


export default connect(mapStateToProps)(Main)