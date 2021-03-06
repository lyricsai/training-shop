import { Fragment } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './ProductsPage.css'
import Main from '../../components/main/Main'


const ProductsPage = ({ category }) => {

    return (
        <Fragment>
            <Header />
            <Main page='products' category={category} />
            <Footer />
        </Fragment>
    )
}

export default ProductsPage
