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
import { BrowserRouter } from 'react-router-dom';

function setRoot() {
    const element = document.createElement('div');
    element.setAttribute('id', 'root');
    document.body.appendChild(element);

}

setRoot();
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.querySelector('#root'));