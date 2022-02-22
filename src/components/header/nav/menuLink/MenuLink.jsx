import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

import './MenuLink.css'

const MenuLink = ({ menuItems, show, hide }) => {

    return (
        menuItems.map(({ id, path, title }) =>
            <li key={id}
            >
                <NavLink
                    onFocus={show}
                    onBlur={hide}
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