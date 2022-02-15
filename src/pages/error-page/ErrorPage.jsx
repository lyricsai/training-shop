import { Fragment } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <div className="error__page">
                    <p>Error 404</p>
                    <p>Page not found</p>
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}

export default ErrorPage