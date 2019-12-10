import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import users from './reducers/usersReducer';
import { Route, Router, Switch } from 'react-router';
import Users from './components/Users';
import { createBrowserHistory } from 'history';
import AddEditUser from './components/AddEditUser.js';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const rootReducer = combineReducers({ users });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store} >
        <Container>
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route path="/users/edit/:id" component={AddEditUser} />
                    <Route path="/users/add" component={AddEditUser}/>
                    <Route path="/users" component={Users} />
                    <Route path="/" component={App} />
                </Switch>
            </Router>
        </Container>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
