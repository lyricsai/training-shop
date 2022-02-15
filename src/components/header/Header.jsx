import './Header.css'
import Nav from './nav/Nav'
import TopBar from './topBar/TopBar'


const Header = () => {
    return (
        <header className="header" data-test-id='header'>
            <TopBar />
            <Nav />
        </header>

    )
}

export default Header