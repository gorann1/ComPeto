<<<<<<< HEAD
import 'tachyons'
import 'styling/semantic.less'

import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const App = () => <div className="min-vh-100 w-200 flex flex-column items-center">
    <div className="w-100 mw7">
        <h1 className="lh-title"><Icon name='home' /> react-semantic-boilerplate</h1>

        <p className="lh-copy">
            Hello there! If you're reading this it means that your Semantic UI React
            app is all set up and ready to go! You can delete the contents of this site
            in <code>src/App.js</code> and build something amazing!
        </p>

        <h3>What's included:</h3>

        <p className="lh-copy">
            ✔️ Direct module imports to reduce bundle size<br />
            ✔️ Hot module reloading<br />
            ✔️ SEO optimizations (incl. Open Graph, Twitter and Google)<br />
            ✔️ The beautiful Inter UI font<br />
            ✔️ Semantic UI React (duh!)<br />
            ✔️ Tachyons for easy layouting
        </p>

        <p className="lh-copy">
            And just for fun: A button!
        </p>
        <button class="ui green basic button">Green</button>
        <Button primary>Semantic UI button</Button>
    </div>
</div>

export default App
=======
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
>>>>>>> work
