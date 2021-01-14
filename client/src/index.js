
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./router/routes";
import 'styling/semantic.less';

ReactDOM.render(<Routes/>, document.getElementById('root'));

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./App', () => { render(App); });
}
