import coll1 from '../../assets/static/collection1.jpg'
import coll2 from '../../assets/static/collection2.jpg'

import men1 from '../../assets/static/men1.jpg'
import men2 from '../../assets/static/men2.jpg'
import men3 from '../../assets/static/men3.jpg'
import men4 from '../../assets/static/men4.jpg'
import men5 from '../../assets/static/men5.jpg'
import men6 from '../../assets/static/men6.jpg'
import men7 from '../../assets/static/men7.jpg'
import men8 from '../../assets/static/men8.jpg'

import women1 from '../../assets/static/women1.jpg'
import women2 from '../../assets/static/women2.jpg'
import women3 from '../../assets/static/women3.jpg'
import women4 from '../../assets/static/women4.jpg'
import women5 from '../../assets/static/women5.jpg'
import women6 from '../../assets/static/women6.jpg'
import women7 from '../../assets/static/women7.jpg'
import women8 from '../../assets/static/women8.jpg'

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

import previewBig from '../../assets/static/preview_big.png'
import preview1 from '../../assets/static/preview1.jpg'
import preview2 from '../../assets/static/preview2.jpg'
import preview3 from '../../assets/static/preview3.jpg'
import preview4 from '../../assets/static/preview4.jpg'
import previewBlue from '../../assets/static/preview_color_blue.jpg'
import previewDark from '../../assets/static/preview_color_dark.jpg'
import previewIvory from '../../assets/static/preview_color_ivory.jpg'
import previewWhite from '../../assets/static/preview_color_white.jpg'

import stripe from '../../assets/payments/Stripe_x42.png'
import aes from '../../assets/payments/AES256_x42.png'
import paypal from '../../assets/payments/paypal_2_x42.png'
import visa from '../../assets/payments/visa_x42.png'
import mastercard from '../../assets/payments/mastercard_x42.png'
import discover from '../../assets/payments/discover_x42.png'
import americanExpress from '../../assets/payments/american-express_x42.png'

import { GET_BANNERS, GET_COLLECTIONS, GET_MEN, GET_WOMEN, GET_FILTERED, GET_PREVIEW, GET_REVIEW } from '../actionsCreators/ActionCreator'

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
    women: [
        { id: 1, src: women1, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 2, src: women2, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: true, discountPrice: 50, available: 'in stock', quantity: 777, prevPrice: '60.00' },
        { id: 3, src: women3, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 4, src: women4, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 5, src: women5, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 6, src: women6, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 7, src: women7, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 8, src: women8, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777, }
    ],
    men: [
        { id: 1, src: men1, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'men', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 2, src: men2, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'men', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 3, src: men3, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'men', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 4, src: men4, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'men', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 5, src: men5, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'men', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 6, src: men6, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'men', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 7, src: men7, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'men', discount: false, discountPrice: null, available: 'in stock', quantity: 777, },
        { id: 8, src: men8, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'men', discount: false, discountPrice: null, available: 'in stock', quantity: 777, }
    ],
    filtered: [
        { id: 1, src: related1, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777 },
        { id: 2, src: related2, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777, prevPrice: '60.00' },
        { id: 3, src: related3, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777 },
        { id: 4, src: related4, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777 },
        { id: 5, src: related5, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777 },
        { id: 6, src: related6, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777 },
        { id: 7, src: related7, title: "Women's tracksuit Q109", price: "30.00", rating: 4, productType: 'women', discount: false, discountPrice: null, available: 'in stock', quantity: 777 },
    ],
    preview: [
        { id: 1, src: previewBig },
        { id: 2, src: preview1 },
        { id: 3, src: preview2 },
        { id: 4, src: preview3 },
        { id: 5, src: preview4 },
        { id: 6, src: previewBlue, color: 'blue' },
        { id: 7, src: previewWhite, color: 'white' },
        { id: 8, src: previewDark, color: 'dark' },
        { id: 9, src: previewIvory, color: 'ivory' },
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
    reviews: [
        { id: 1, name: 'Oleh Chabanov', review: 'On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment', time: '3 months ago', rating: 5 },
        { id: 2, name: 'ShAmAn design', review: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti', time: '3 months ago', rating: 5 },
    ]
}

const MainReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_BANNERS: return { ...state.banners, banners: payload.data }
        case GET_COLLECTIONS: return { ...state.collections, collections: payload.data }
        case GET_MEN: return { ...state.men, men: payload.data }
        case GET_WOMEN: return { ...state.women, women: payload.data }
        case GET_FILTERED: return { ...state.filtered, filtered: payload.data }
        case GET_PREVIEW: return { ...state.preview, preview: payload.data }
        case GET_REVIEW: return { ...state.reviews, reviews: payload.data }
        default: return state
    }
}

export default MainReducer

export const getBanners = () => (dispatch) => dispatch({ type: GET_BANNERS })
export const getCollections = () => (dispatch) => dispatch({ type: GET_COLLECTIONS })
export const getMen = () => (dispatch) => dispatch({ type: GET_MEN })
export const getWomen = () => (dispatch) => dispatch({ type: GET_WOMEN })
export const getFiltered = () => (dispatch) => dispatch({ type: GET_FILTERED })
export const getPreview = () => (dispatch) => dispatch({ type: GET_PREVIEW })
export const getReview = () => (dispatch) => dispatch({ type: GET_REVIEW })

export const mapStateToProps = () => {
    return {
        women: defaultState.women,
        men: defaultState.men,
        banners: defaultState.banners,
        collections: defaultState.collections,
        filtered: defaultState.filtered,
        preview: defaultState.preview,
        payments: defaultState.payments,
        reviews: defaultState.reviews
    }
}

export const mapDispatchToProps = () => {
    return {}
}