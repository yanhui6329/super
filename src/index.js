import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'; // es6模块化的语法

import './modules/rem'
// 整个应用的最外层要套上BrowserRouter 或者是 HashRouter,使其成为一个路由组件
ReactDOM.render(
  <Router>
    <App />
  </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
