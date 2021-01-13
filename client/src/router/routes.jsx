import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Centers from "../pages/Centers";
import Roles from "../pages/Roles";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Layout from '../components/Layout/Layout';
function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/centers" component={Centers}/>
                        <Route path="/roles" component={Roles}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/contact" component={Contact}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;