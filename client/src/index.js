import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
window.$ = window.jQuery = require('jquery');
import $ from 'jquery';
require('semantic-ui-css/semantic');
import reportWebVitals from './reportWebVitals';
 
$('.ui.sidebar').sidebar({
    context: $('.bottom.segment')
})
    .sidebar('attach events', '.menu .item');
  
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
