import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Users } from './components/Users';
import { Products } from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Category from './components/category';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/users" component={Users}/>
      <Route path="/products" component={Products}/>
      <Route path ="/category" component={Category}/>
    </Switch>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
