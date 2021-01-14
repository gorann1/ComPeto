import React from 'react';
import Sidebar from "../Sidebar";
import Nav from "../Navbar";


function Layout(props) {
    
    return (
        <>
                <Sidebar history={props.history}/>
                <div>
                    <Nav history={props.history}/>
                    {props.children}
                </div>
                </>
    );
}

export default Layout;