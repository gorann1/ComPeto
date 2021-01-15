import 'tachyons';
import 'styling/semantic.less';
import React from 'react';
import Routes from './router/routes';
import { AppContainer } from 'react-hot-loader'

function App() {
	return (
		<AppContainer>
			<Routes />
		</AppContainer>
	);
}

export default App;
