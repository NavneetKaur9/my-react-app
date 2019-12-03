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
  Route,Redirect
} from "react-router-dom";
import Category from './components/Category';
import { Login } from './components/Login';
import {fakeAuth} from './fakeAuth';

const PrivateRoute = ({component: Component,  ...rest}) => {
  let authed=fakeAuth.isAuthenticated;
  
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}

ReactDOM.render(
  <Router>
    {console.log(fakeAuth)}
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/users" component={Users}/>
      {/* <Route path="/products" component={Products}/> */}
      <Route path="/category" component={Category}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path='/products' component = {Products} />
    </Switch>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
