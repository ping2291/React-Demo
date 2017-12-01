// React 16 depends on the collection types Map and Set, for < IE11
import 'babel-polyfill';
// React also depends on requestAnimationFrame, for < IE10
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'
import reduxThunk from 'redux-thunk';

import App from './components/App';
import './css/index.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
