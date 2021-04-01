import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Add } from './Add';
import { User } from './List'

export const Users = () => {
    return (
        <Switch>
            <Route path='/users/add' component={Add} />
            <Route path='/users/edit/:id' component={Add} />
            <Route path='/users/' component={User} />
        </Switch>
    )
}
