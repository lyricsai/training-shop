import { Fragment } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import './ProductPage.css'
import PropTypes from 'prop-types'

const ProductPage = ({ category }) => {

    return (
        <Fragment>
            <Header />
            <Main page='product' category={category} />
            <Footer />
        </Fragment>
    )
}

ProductPage.propTypes = {
    category: PropTypes.string,
}
export default ProductPage