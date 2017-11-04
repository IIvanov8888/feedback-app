import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './components/App';
import reducers from './reducers';

const store = createStore(() => reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
    // read changes on the store and update all components !
    <Provider store={store}><App /></Provider>
    , document.querySelector('#root')
);
