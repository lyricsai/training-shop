import { Products } from './products'
import { GET_MEN, GET_WOMEN } from '../actionsCreators/ActionCreator'

const ProductsReducer = (state = Products, { type, payload }) => {
    switch (type) {
        case GET_MEN: return { ...state.men, men: payload.data }
        case GET_WOMEN: return { ...state.women, women: payload.data }
        default: return state
    }
}

export const getMen = () => (dispatch) => dispatch({ type: GET_MEN })
export const getWomen = () => (dispatch) => dispatch({ type: GET_WOMEN })


export default ProductsReducer