import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
window.$ = window.jQuery = require('jquery');
import $ from 'jquery';
require('semantic-ui-css/semantic');
 
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

