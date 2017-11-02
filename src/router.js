import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/landing';
import About from './components/about'
import Cart from './components/cart';
import Product from './components/product'
export default(
    <Switch>
        <Route component={Landing} path='/' exact/>
        <Route component={About} path='/about' />
        <Route component={Cart} path='/cart'/>
        <Route component={Product} path ='/product/:id'/>
    </Switch>
)