import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducer from './reducers';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

const store = applyMiddleware(thunk)(createStore)

ReactDOM.render(
    <Provider store={store(reducer)}>
        <Router routes={Routes} history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);