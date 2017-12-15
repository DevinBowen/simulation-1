import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import ShelfA from './components/shelfA'

export default (
    // 42G
    <Switch>
        {/* 42F */}
        <Route exact path='/' component={Home} />
        <Route path='/a' component={ShelfA} />

    </Switch>
)