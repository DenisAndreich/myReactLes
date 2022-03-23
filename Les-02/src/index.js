import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const name = 'Shket - Denchik'

ReactDOM.render(
  <React.StrictMode>
    <App myName = {name}/>
  </React.StrictMode>,
  document.getElementById('root')
);
