import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Message from './Message';

const name = 'Denchik'
const message = 'Переданный текст'

ReactDOM.render(
  <React.StrictMode>
    <App myName = {name}/>
    <Message textMessage = {message}/>
  </React.StrictMode>,
  document.getElementById('root')
);
