import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './config/store'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';

const app = <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>

    </Provider>


ReactDom.render(app,document.getElementById('root'));
registerServiceWorker();