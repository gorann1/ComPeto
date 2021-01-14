import React from 'react';
import Sidebar from "../Sidebar";
import Nav from "../Navbar";


function Layout(props) {
    
    return (
        <div>
            <div style={{display: "flex"}}>
                <Sidebar history={props.history}/>
                <div>
                    <Nav/>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;