import Policy from "./Policy/Policy"
import './Policies.css'
import { Fragment } from "react"

const Policies = () => {
    return (
        <Fragment>
            <div className="main__policies">
                <div className="container">
                    <Policy icon={'icon-delivery'} title={'FREE SHIPPING'} text={'On all UA order or order above $100'} />
                    <Policy icon={'icon-return'} title={'30 DAYS RETURN'} text={'Simply return it within 30 days for an exchange'} />
                    <Policy icon={'icon-support'} title={'SUPPORT 24/7'} text={'Contact us 24 hours a day, 7 days a week'} />
                </div></div>
        </Fragment >
    )
}

export default Policies