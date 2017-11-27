import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
