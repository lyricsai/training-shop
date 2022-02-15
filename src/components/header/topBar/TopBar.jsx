import SocialNetwork from '../../socialNetwork/SocialNetwork'
import Contacts from './contacts/Contacts'
import './TopBar.css'


const TopBar = () => {
    return (
        <div className="header__topBar_container">
            <div className="header__topBar">
                <Contacts />
                <SocialNetwork />
            </div>
        </div>
    )
}

export default TopBar