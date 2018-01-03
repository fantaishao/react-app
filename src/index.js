import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import './polyfill';
import './index.css';
import App from './contaniers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider>
        <Router >
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
