// let element = document.createElement('div');

// element.innerHTML = 'hello world';

// document
//     .body
//     .appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './static/index.css';
import App from './views/App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import {connect } from 'react-redux';
import { createStore } from 'redux';
import manageState, { initialState } from './reducers/reducers';
import { BrowserRouter } from 'react-router-dom';

function setRoot() {
    const element = document.createElement('div');
    element.setAttribute('id', 'root');
    document.body.appendChild(element);

}
let store  = createStore(manageState, initialState);
let unsubscribe = store.subscribe(() => 
    console.log(store.getState())
);

store.dispatch({type: 'PROFESSION_SELECTED', profession: 'ENCHANTING'});
store.dispatch({type: 'PROFESSION_SELECTED', profession: 'LEATHERWORKING'});
store.dispatch({type: 'PROFESSION_SELECTED', profession: 'MINING'});
store.dispatch({type: 'PROFESSION_SELECTED', profession: 'HERBLORE'});

unsubscribe();
setRoot();
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));