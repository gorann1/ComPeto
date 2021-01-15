import React, { useEffect, useState } from 'react';
import {
	Menu, Input, Button, Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavbarItems from './NavbarItems';

function Nav(props, { defaultActive }) {
	const { location } = props.history;
	const lastActiveIndexString = localStorage.getItem('lastActiveIndex');
	const lastActiveIndex = Number(lastActiveIndexString);
	const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);
	function getPath(path) {
		if (path.charAt(0) !== '/logout') {
			return `/logout${path}`;
		}
		return path;
	}
	function changeActiveIndex(newIndex) {
		localStorage.setItem('lastActiveIndex', newIndex);
		setActiveIndex(newIndex);
	}

	useEffect(() => {
		const activeItem = NavbarItems.findIndex((item) => getPath(item.route) === getPath(location.pathname));
		changeActiveIndex(activeItem);
	}, [location]);

	// TODO: add menu items
	return (
		<Menu secondary>
			<Menu.Item>
				<Input icon='search' placeholder='Search...' />
			</Menu.Item>
			<div>
				{
					NavbarItems.map((item, index) => (
						<Link to={item.route}>
							<Menu.Item key={item.name}
								active={index === activeIndex}
							>
								<p>{item.name}</p>
							</Menu.Item>
						</Link>
					))
				}
			</div>
		</Menu>
	);
}

export default Nav;
