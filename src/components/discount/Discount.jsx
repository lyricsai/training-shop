import { Fragment } from 'react'
import './Discount.css'

export const Discount = ({ discount, discountPrice }) => {
    return (<Fragment>
        { discount && (<span className='discount'>-{discountPrice}%</span>)}
    </Fragment>)
}