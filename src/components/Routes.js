import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Home from '../views/Home';
import Materials from '../views/Materials';
import Products from '../views/Products';

const Routes = function () {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Materials} />
                <Route exact path="/Materials" component={Materials} />
                <Route exact path="/Products" component={Products} />
            </Switch>
        </div>
    )
}

export default Routes;