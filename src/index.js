import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { browserHistory } from 'react-router';
import './index.css';
import Routes from './routes';

ReactDOM.render(
 <Routes history={browserHistory} />,
 document.getElementById('root')
);
