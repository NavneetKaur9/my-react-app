import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import users from './reducers/usersReducer';
import { Route, Router, Switch } from 'react-router';
import Users from './components/Users';
import { createBrowserHistory } from 'history';
import UserDetail from './components/UserDetail';

const rootReducer = combineReducers({ users });

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store} >
        <Router history={createBrowserHistory()}>
           <Switch>
                <Route path="/user/:id" component={UserDetail}/>
                <Route path="/users" component={Users}/>
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
