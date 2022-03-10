import {
    SELECTED_COLORS,
    SELECTED_SIZES,
    SELECTED_BRANDS,
    SELECTED_PRICES,
    RESET_FILTERS,
    ITEMS_FOUND,
    IS_FILTER_OPEN,
} from '../consts'


export const selectColors = (payload) => ({
    type: SELECTED_COLORS,
    payload
})

export const selectSizes = (payload) => ({
    type: SELECTED_SIZES,
    payload
})

export const selectBrands = (payload) => ({
    type: SELECTED_BRANDS,
    payload
})

export const selectPrices = (payload) => ({
    type: SELECTED_PRICES,
    payload
})

export const resetFilters = () => ({
    type: RESET_FILTERS
})

export const setItemsFound = (payload) => ({
    type: ITEMS_FOUND,
    payload
})

export const setFilterOpen = (payload) => ({
    type: IS_FILTER_OPEN,
    payload
})