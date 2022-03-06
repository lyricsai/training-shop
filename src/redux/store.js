
import { combineReducers, createStore } from 'redux'

import mainReducer from './reducers/mainReducer'
import productsReducer from './reducers/productsReducer'


const rootReducers = combineReducers({

    products: productsReducer,
    main: mainReducer

})

const configureStore = (reducers = rootReducers, preloadedState = {}) => createStore(reducers,
    preloadedState)


export default configureStore