import { Link } from 'react-router-dom'
import Actions from './actions/Actions'
import Burger from './burger/Burger'
import MenuLink from './menuLink/MenuLink'
import './Nav.css'

import { useState } from 'react'


const menuItems = [
    { id: 1, path: 'about', title: 'About US' },
    { id: 2, path: 'women', title: 'Women' },
    { id: 3, path: 'men', title: 'Men' },
    { id: 4, path: 'beauty', title: 'Beauty' },
    { id: 5, path: 'accessories', title: 'Accessories' },
    { id: 6, path: 'blog', title: 'Blog' },
    { id: 7, path: 'contact', title: 'Contact' },
]

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => { setMenuOpen(!menuOpen) }

    return (
        <>
            <div className="container">
                <nav>
                    <Burger toggleMenu={toggleMenu} isOpen={menuOpen} />
                    <Link to="/" className='header-nav-logo' data-test-id='header-logo-link'>CleverShop</Link>
                    <ul className="menu" data-test-id='menu'>
                        <MenuLink menuItems={menuItems} />
                    </ul>
                    <Actions />
                </nav>
            </div>
            <style jsx="true">{`
                @media(max-width: 980px) { 
                    .menu{
                    display: ${menuOpen ? 'flex' : 'none'};
                
                }
                }
        `}</style>
        </>
    )
}

export default Nav