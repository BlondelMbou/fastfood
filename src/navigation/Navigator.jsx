import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../pages/home/Home';
import Login from '../pages/Login/Login';
import NotFound from '../pages/notFound/NotFound';
import Register from '../pages/Register/Register';

function Navigator() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signin' exact component={Login} />
                <Route path='/signup' exact component={Register} />
                <Route path='*' component={NotFound} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Navigator