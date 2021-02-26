import React, { Component } from 'react';
import { render } from 'react-dom';
//css
import css from './styles/style.styl';
//components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//react router deps
import { Router, Route, IndexRoute, browserHistory } from "react-router";

const router = (
    //will alow push state and change urls without reloading the page
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            //if / then:
            <IndexRoute component={PhotoGrid}></IndexRoute>
            //other routes
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
);


render(router, document.getElementById('root'));