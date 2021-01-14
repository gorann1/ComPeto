import React, { useEffect, useState } from 'react';
import { Grid, Header, Segment, Sidebar, Image, Menu } from 'semantic-ui-react';

function SidebarNav() {

	const [visible, setVisible] = React.useState(true)

	return (
		<Grid columns={1}>
		<Grid.Column>
			<Sidebar.Pushable as={Segment}>
			<Sidebar
            as={Menu}
            animation='slide along'
            icon='labeled'
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
						width='large'          >
						 <Menu size="large" pointing secondary vertical style={{width:'100%', fontSize:'1.1em'}}>
            <Menu.Item as='a'>
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              Channels
            </Menu.Item>
						</Menu>
          </Sidebar>
				<Sidebar.Pusher>
					<Segment basic>
						<Header as='h3'>Application Content</Header>
						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
					</Segment>
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		</Grid.Column>
	</Grid>
	);
}

export default SidebarNav;
