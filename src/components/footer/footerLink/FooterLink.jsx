import { Link } from "react-router-dom"
import './FooterLink.css'
import PropTypes from 'prop-types'

const FooterLink = ({ list }) => {

    return (
        list.map(({ id, path, title, underline }) =>
            <Link
                key={id}
                to={`/${path}`}
                className='footer__link'
                data-test-id={`footer-nav-link-${path}`}
                style={{ textDecoration: underline }}
            >{title}
            </Link>
        )
    )
}

FooterLink.propTypes = {
    list: PropTypes.array
}

export default FooterLink