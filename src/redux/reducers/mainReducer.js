import coll1 from '../../assets/static/collection1.jpg'
import coll2 from '../../assets/static/collection2.jpg'

import related1 from '../../assets/static/related1.jpg'
import related2 from '../../assets/static/related2.jpg'
import related3 from '../../assets/static/related3.jpg'
import related4 from '../../assets/static/related4.jpg'
import related5 from '../../assets/static/related5.jpg'
import related6 from '../../assets/static/related6.jpg'
import related7 from '../../assets/static/related7.jpg'

import bannerWomen from '../../assets/static/banner-women.jpg'
import bannerMen from '../../assets/static/banner-men.jpg'
import bannerAccessories from '../../assets/static/banner-accessories.jpg'


import stripe from '../../assets/payments/Stripe_x42.png'
import aes from '../../assets/payments/AES256_x42.png'
import paypal from '../../assets/payments/paypal_2_x42.png'
import visa from '../../assets/payments/visa_x42.png'
import mastercard from '../../assets/payments/mastercard_x42.png'
import discover from '../../assets/payments/discover_x42.png'
import americanExpress from '../../assets/payments/american-express_x42.png'

import { GET_BANNERS, GET_COLLECTIONS, GET_FILTERED, GET_OPTIONS } from '../consts'

const defaultState = {
    banners: [
        { id: 1, src: bannerWomen, title: 'Women' },
        { id: 2, src: bannerMen, title: 'Men' },
        { id: 3, src: bannerAccessories, title: 'Accessories' },
    ],
    collections: [
        { id: 1, src: coll1 },
        { id: 2, src: coll2 }
    ],
    filtered: [
        { id: 1, images: [{ url: related1 }], title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777 },
        { id: 2, images: [{ url: related2 }], title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777, prevPrice: '60.00' },
        { id: 3, images: [{ url: related3 }], title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777 },
        { id: 4, images: [{ url: related4 }], title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777 },
        { id: 5, images: [{ url: related5 }], title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777 },
        { id: 6, images: [{ url: related6 }], title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777 },
        { id: 7, images: [{ url: related7 }], title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777 },
    ],
    payments: [
        { id: 1, src: stripe },
        { id: 2, src: aes },
        { id: 3, src: paypal },
        { id: 4, src: visa },
        { id: 5, src: mastercard },
        { id: 6, src: discover },
        { id: 7, src: americanExpress },
    ],
    options: [
        { title: "New Arrivals", particular: "isNewArrivals" },
        { title: "Specials", particular: "isSpecial" },
        { title: "Bestsellers", particular: "isBestseller" },
        { title: "Most Viewed", particular: "isMostViewed" },
        { title: "Featured Products", particular: "isFeatured" },]
}

const MainReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_BANNERS: return { ...state.banners, banners: payload.data }
        case GET_COLLECTIONS: return { ...state.collections, collections: payload.data }
        case GET_FILTERED: return { ...state.filtered, filtered: payload.data }
        case GET_OPTIONS: return { ...state.options, reviews: payload.data }
        default: return state
    }
}

export const getBanners = () => (dispatch) => dispatch({ type: GET_BANNERS })
export const getCollections = () => (dispatch) => dispatch({ type: GET_COLLECTIONS })
export const getFiltered = () => (dispatch) => dispatch({ type: GET_FILTERED })
export const getOptions = () => (dispatch) => dispatch({ type: GET_OPTIONS })


export default MainReducer