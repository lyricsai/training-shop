import { mapStateToProps } from '../../redux/reducers/mainReducer'
import Clothes from '../clothes/Clothes'
import Home from '../home/Home'
import Product from '../product/Product'
import ProductsHeader from '../products-header/ProductsHeader'
import RelatedProducts from '../relatedProducts/RelatedProducts'
import './Main.css'
import { connect } from 'react-redux'

const Main = (
    { page, productType, women, men, filtered, preview }
) => {


    let products = {}
    productType === 'women' ? products = women : products = men

    const related = filtered.slice(0, 4)

    if (page === 'home') return (
        <main><Home /></main>)

    else if (page === 'product') return (
        <main>
            <Product
                productType={productType}
                products={products}
                preview={preview}
            />
            <RelatedProducts related={related} productType={productType} /></main>)


    else if (page === 'products') return (
        <main>
            <ProductsHeader title={productType} />
            <Clothes
                productType={productType}
                products={products}
            />
        </main>
    )

}

export default connect(mapStateToProps)(Main)