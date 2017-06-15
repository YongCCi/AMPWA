import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'
import Home from './containers/home.js';
import Product from './containers/product.js';
import PushSetting from './containers/push-setting.js';

import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router history = {browserHistory}>
        <App>
            <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/recruit" component = {Product} />
            <Route path = "/push-setting" component = {PushSetting} />
            </Switch>
        </App>        
   </Router>
   , document.getElementById('root')
);