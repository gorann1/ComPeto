import React from 'react';
import SidebarNav from "../Sidebar";
import Nav from "../Navbar";


function Layout(props) {
    
    return (
    <div className="ui wrapper">
        <SidebarNav history={props.history}/>
            <div className="pusher">
                <Nav history={props.history}/>
                {props.children}
            </div>
    </div>
    );
}

export default Layout;