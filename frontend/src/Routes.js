import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/index.js';
import Home from './components/home.js';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
    </Route>
)