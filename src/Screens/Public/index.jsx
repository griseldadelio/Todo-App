import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './Login';


export const Public = () => {
    console.log('public')
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
            </Switch>
        </Router>
    )
}
