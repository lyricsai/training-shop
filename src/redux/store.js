// import thunk from 'redux-thunk'
import { combineReducers, createStore } from 'redux'
// import { logger } from 'redux-logger'
import mainReducer from './reducers/mainReducer'
import productsReducer from './reducers/productsReducer'

// const enhancers = compose(
//     applyMiddleware(
//         thunk,
//         logger),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) => createStore(
//     combineReducers({
//         mainReducer,
//         ...reducers
//     }),
//     preloadedState,
//     enhancers
// )

const rootReducers = combineReducers({

    products: productsReducer,
    main: mainReducer

})

const configureStore = (reducers = rootReducers, preloadedState = {}) => createStore(reducers,
    preloadedState)


export default configureStore