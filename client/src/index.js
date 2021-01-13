import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
const render = (Component) => ReactDOM.render(
	<AppContainer>
		<App/>
	</AppContainer>,
	document.getElementById('root'),
);

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./App', () => { render(App); });
}
