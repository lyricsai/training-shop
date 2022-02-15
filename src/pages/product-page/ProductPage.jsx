import { Fragment } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import './ProductPage.css'

const ProductPage = ({ productType }) => {

    return (
        <Fragment>
            <Header />
            <Main page='product' productType={productType} />
            <Footer />
        </Fragment>
    )
}

export default ProductPage

