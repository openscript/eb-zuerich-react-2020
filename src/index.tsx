import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Store, createStore, applyMiddleware } from 'redux';
import { State } from './models/state';
import { reducer } from './models/reducer'; 
import { Provider } from 'react-redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';

const persistorConfig: PersistConfig<State> = {
    key: 'user-manager',
    version: 1,
    storage
}

const persistentReducer = persistReducer(persistorConfig, reducer);

const store: Store<State> = createStore(persistentReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

const createApp = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)

ReactDOM.render(createApp(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
