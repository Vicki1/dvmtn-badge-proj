import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/landing';
import About from './components/about'
import Cart from './components/cart';
export default(
    <Switch>
        <Route component={Landing} path='/' exact/>
        <Route component={About} path='/about' />
        <Route component={Cart} path='/cart'/>
    </Switch>
)