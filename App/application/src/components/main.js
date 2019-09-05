import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Agenda from './agenda';
import Notifications from './notifications';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/agenda" component={Agenda} />
        <Route exact path="/notifications" component={Notifications} />
    </Switch>
)

export default Main;