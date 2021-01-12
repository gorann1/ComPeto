import React, { Fragment, Component,} from 'react';
import SidebarNav from './components/Sidebar';
import 'semantic-ui-css/semantic.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
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
 
