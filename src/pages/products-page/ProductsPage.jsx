import { Fragment, useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import { useLocation } from "react-router"
import './ProductsPage.css'


const ProductsPage = ({ category }) => {

    let url = useLocation().pathname.split("/")[1]



    return (
        <Fragment>
            <Header />
            <Main page='products' category={url} />
            <Footer />
        </Fragment>
    )
}

export default ProductsPage
