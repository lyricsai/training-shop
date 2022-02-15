import { Fragment } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import './MainPage.css'

const MainPage = () => {
    return (
        <Fragment>
            <Header />
            <Main page='home' />
            <Footer />
        </Fragment>
    )
}

export default MainPage