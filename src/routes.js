import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './home';
import Calendar from './calendar';


const Routes = () => (
 <Router history={browserHistory}>
   <Route path="/" component={App}>
       <Route path="home" component={Home} />
       <Route path="calendar" component={Calendar} />
   </Route>
 </Router>
);
export default Routes;
