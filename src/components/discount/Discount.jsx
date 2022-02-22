import { Fragment } from 'react'
import './Discount.css'

export const Discount = ({ discount }) => {
    return (<Fragment>
        { discount && (<span className='discount'>{discount}</span>)}
    </Fragment>)
}