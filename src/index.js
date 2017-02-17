import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';

const mountApp = document.getElementById('root');

ReactDOM.render(
       <App />,
    mountApp
);

if (module.hot) {
const nextApp = require('./App').default;
    module.hot.accept('./App', () => {
        ReactDOM.render(
               <nextApp />,
            mountApp
        );
    });
}
