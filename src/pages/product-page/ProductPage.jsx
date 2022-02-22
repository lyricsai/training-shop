import { Fragment } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import './ProductPage.css'

const ProductPage = ({ category }) => {

    return (
        <Fragment>
            <Header />
            <Main page='product' category={category} />
            <Footer />
        </Fragment>
    )
}

export default ProductPage

