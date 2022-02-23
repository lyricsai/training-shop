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
    const hide = () => { setMenuOpen(false) }
    const show = () => { setMenuOpen(true) }

    return (
        <>
            <div className="container" onBlur={hide}>
                <nav>
                    <Link to="/" className='header-nav-logo' data-test-id='header-logo-link'>CleverShop</Link>
                    <ul className="menu" data-test-id='burger-menu'>
                        <MenuLink menuItems={menuItems} show={show} />
                    </ul>
                    <Actions />
                    <Burger toggleMenu={toggleMenu} isOpen={menuOpen} />
                </nav>
            </div>
            <style jsx="true">{`
                @media(max-width: 996px) { 
                    .menu{
                    transform: translate${menuOpen ? '(0)' : '(-100%)'};
                    }
                    body{
                        overflow: ${menuOpen ? 'hidden' : 'auto'} 
                    }
                }
        `}</style>
        </>
    )
}

export default Nav