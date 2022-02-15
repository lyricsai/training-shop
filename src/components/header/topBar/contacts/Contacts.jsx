import './Contacts.css'

const Contacts = () => {
    return (
        <ul className="contacts">
            <li className='phone'><i className="icon-phone"><span className="path1"></span><span className="path2"></span></i>+375 29 100 20 30</li>
            <li className='location'><i className='icon-location'></i>Belarus, Gomel, Lange 17</li>
            <li className='clock'><i className='icon-clock'></i>All week 24/7</li>
        </ul>
    )
}

export default Contacts