import React from 'react';
import SidebarNav from "../Sidebar";
import Nav from "../Navbar"
import { Sidebar, Segment, Container } from 'semantic-ui-react';


function Layout(props) {
    
    return (
     	<Sidebar.Pushable as={Segment} style={{height: '100vh', background:'#f4f4f4'}}>
            <SidebarNav history={props.history}/>
            <Container>
               <Sidebar.Pusher>
                <Nav history={props.history}/>
               {props.children}
			   </Sidebar.Pusher>
            </Container>
        </Sidebar.Pushable>
    );
}

export default Layout;