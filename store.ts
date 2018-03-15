import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from './reducers/index';

export default function configureStore() {
    const store = createStore(rootReducer);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
