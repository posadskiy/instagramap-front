import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunk));

    if (module.hot) {
        module.hot.accept('../reducer', () => {
            const nextRootReducer = require('../reducer');
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
}
