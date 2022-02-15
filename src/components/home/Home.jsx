import './Home.css'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../redux/reducers/mainReducer'

import Banners from "./banners/Banners"
import Policies from "./policies/Policies"
import Clothes from '../clothes/Clothes'
import Collection from '../collections/Collection'

import Offer from '../offer/Offer'
import Blog from '../blog/Blog'

const Home = ({ women, banners, men, collections }) => {



    return (
        <div className='home'>
            <Banners banners={banners} />
            <Policies />
            <Clothes products={women} productType='women' />
            <Clothes products={men} productType='men' />
            <section className='collections'>
                <Collection src={collections[0].src} title='new season' text='lookbook collection' />
                <Collection src={collections[1].src} title='sale' text='get up to' accent='50% OFF' />
            </section>
            <Offer />
            <Blog />
        </div>
    )
}

export default connect(mapStateToProps)(Home)