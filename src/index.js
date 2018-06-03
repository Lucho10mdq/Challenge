import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import {BrowserRouter as   Router} from 'react-router-dom';
import AppRouters from './routes';
render(
  <Router>
    <AppRouters />
  </Router>,
 document.getElementById('root')
);
//registerServiceWorker();
