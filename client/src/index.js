
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import 'styling/semantic.less';

ReactDOM.render(<App/>, document.getElementById('root'));

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./App', () => { render(App); });
}
