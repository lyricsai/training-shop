import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

import './MenuLink.css'

const MenuLink = ({ menuItems }) => {

    return (
        menuItems.map(({ id, path, title }) =>
            <li key={id}
            >
                <NavLink
                    key={id}
                    to={`/${path}`}
                    className='menu-item'
                    data-test-id={`menu-link-${path}`}
                >
                    {title}
                </NavLink>
            </li>
        )
    )
}

export default MenuLink