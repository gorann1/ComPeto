import React, { Fragment, Component,} from 'react';
import SidebarNav from './components/Sidebar';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
class App extends Component {


    render() {
        return(
            <Fragment>
                <SidebarNav />
            </Fragment>

        );
    }
}

export default App;
 
