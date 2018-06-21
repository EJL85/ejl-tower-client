import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Bar from './BarChart';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/bar" component={Bar} />
            <Route component={NotFound} />
        </Switch>
</BrowserRouter>
);

export default Router;