import React, { useEffect, useState } from 'react';
import { Segment, Sidebar, Menu } from 'semantic-ui-react';
import MenuItems from './SidebarItems';
import {Link} from "react-router-dom";

function SidebarNav(props, {defaultActive}) {

	const [visible, setVisible] = React.useState(true);
	const location = props.history.location;
	const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
	const lastActiveIndex = Number(lastActiveIndexString);
	const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

	function changeActiveIndex(newIndex) {
			localStorage.setItem("lastActiveIndex", newIndex)
			setActiveIndex(newIndex)
	}

	function getPath(path) {
			if (path.charAt(0) !== "/") {
					return  "/" + path;
			}
			return path;
	}
	useEffect(()=> {
		const activeItem = MenuItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
		changeActiveIndex(activeItem);
}, [location])

	return (
	<Sidebar
		as={Menu}
		animation='slide along'
		icon='labeled'
		onHide={() => setVisible(false)}
		vertical
		visible={visible}
		width='wide' 
		style={{background:'#fefefe', fontSize:'1.2em'}}
		>
			<Menu size="large" pointing secondary vertical style={{width:'100%', fontSize:'1.1em'}}>
				<div>COMPETO</div>
				{
					MenuItems.map((item, index)=> {
						return (
							<Link to={item.route}>
								<Menu.Item key={item.name}
									active={index === activeIndex}
									style={{borderRightWidth:'3px' }}
								>
								<p>{item.name}</p>
									</Menu.Item>
									</Link>
						);
					})
				}
			</Menu>
	</Sidebar>

	);
}

export default SidebarNav;
