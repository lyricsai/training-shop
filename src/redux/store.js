import { combineReducers, createStore } from 'redux'

import mainReducer from './reducers/mainReducer'
import productsReducer from './reducers/productsReducer'
import filterReducer from './reducers/filterReducer'


const rootReducers = combineReducers({

    products: productsReducer,
    main: mainReducer,
    filter: filterReducer

})

const configureStore = (reducers = rootReducers, preloadedState = {}) => createStore(reducers,
    preloadedState)


export default configureStore