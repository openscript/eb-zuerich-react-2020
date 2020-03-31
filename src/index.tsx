import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Store, createStore } from 'redux';
import { State, initialState } from './models/state';
import { reducer } from './models/reducer'; 
import { Provider } from 'react-redux';

const store: Store<State> = createStore(reducer, initialState);

const createApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(createApp(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
