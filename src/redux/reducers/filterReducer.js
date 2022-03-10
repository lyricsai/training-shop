import {
    SELECTED_COLORS,
    SELECTED_SIZES,
    SELECTED_BRANDS,
    SELECTED_PRICES,
    RESET_FILTERS,
    ITEMS_FOUND,
    IS_FILTER_OPEN,
} from '../consts'

const initialState = {
    colors: [],
    sizes: [],
    brands: [],
    prices: [],
    itemsFound: null,
    isFilterOpen: false,
}

const filterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SELECTED_COLORS: {
            const { value } = payload
            return {
                ...state,
                colors: state.colors.includes(value)
                    ? state.colors.filter((color) => color !== value)
                    : [...state.colors, value],
            };
        }
        case SELECTED_SIZES: {
            const { value } = payload
            return {
                ...state,
                sizes: state.sizes.includes(value)
                    ? state.sizes.filter((size) => size !== value)
                    : [...state.sizes, value],
            };
        }
        case SELECTED_BRANDS: {
            const { value } = payload
            return {
                ...state,
                brands: state.brands.includes(value)
                    ? state.brands.filter((brand) => brand !== value)
                    : [...state.brands, value],
            };
        }
        case SELECTED_PRICES: {
            const { value } = payload
            return {
                ...state,
                prices: state.prices.includes(value)
                    ? state.prices.filter((price) => price !== value)
                    : [...state.prices, value],
            };
        }
        case RESET_FILTERS: {
            return {
                ...state,
                colors: [],
                sizes: [],
                brands: [],
                prices: [],
            };
        }
        case ITEMS_FOUND: {
            const itemsFound = payload
            return {
                ...state,
                itemsFound,
            }
        }
        case IS_FILTER_OPEN: {
            const isFilterOpen = payload
            return {
                ...state,
                isFilterOpen,
            };
        }
        default:
            return state
    }
}

export default filterReducer