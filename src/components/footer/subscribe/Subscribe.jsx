import Form from "../../form/Form"
import SocialNetwork from "../../socialNetwork/SocialNetwork"

import './Subscribe.css'

const Subscribe = () => {

    return (
        <div className="footer__subscribe">
            <div className="container">
                <h3>Be in Touch with us:</h3>
                <Form text='Join Us' />
                <SocialNetwork /></div>
        </div>
    )
}

export default Subscribe