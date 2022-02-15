import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import mainReducer from './reducers/mainReducer'

const enhancers = compose(
    applyMiddleware(
        thunk,
        logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) => createStore(
    combineReducers({
        mainReducer,
        ...reducers
    }),
    preloadedState,
    enhancers
)

export default configureStore