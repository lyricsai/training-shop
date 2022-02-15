import PropTypes from 'prop-types'

const Burger = ({ toggleMenu, isOpen }) => {

    let toggle
    isOpen ? toggle = '_active' : toggle = null

    return (
        <>
            <button type="button" className={`menu__icon ${toggle} icon-menu`} onClick={toggleMenu}>
                <span ></span>
                <span></span>
                <span ></span>
            </button>

        </>
    )
}

Burger.propTypes = {
    toggleMenu: PropTypes.func,
    isOpen: PropTypes.bool
}

export default Burger