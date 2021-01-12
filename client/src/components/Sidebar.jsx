import React, { Component } from 'react';
import {
    Button,
    Menu,
    Segment,
    Sidebar,
    Dropdown,
    Container
} from 'semantic-ui-react';

class SidebarNav extends Component {
    state = { visible: true }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
  
    componentDidUpdate(nextProps, nextState) {
        // when the menu becomes visible, setup some handlers so we can close the menu easily
        if (nextState.visible == true) {
            document.addEventListener('keydown', this.handleKeyPress);
            document.querySelector('.pusher').addEventListener('click', this.handleClick);
        }
        else {
            document.removeEventListener('keydown', this.handleKeyPress);
            document.querySelector('.pusher').removeEventListener('click', this.handleClick);
        }
      
    }
  
    handleClick = () => {
        if (this.state.visible) {
            this.setState({ visible: false });
        }
    }
    handleKeyPress = (e) => {
        if(e.keyCode === 27 && this.state.visible) {
            this.setState({ visible: false });
        }
    }


    render() {
        const { activeItem } = this.state;
        const { visible } = this.state;
        return (
            <div>
                <Sidebar.Pushable as={Segment}  style={{minHeight: '100vh'}}>
                    <Sidebar as={Menu} animation='uncover' width='auto' visible={visible} icon='labeled' vertical pointing menu>
                        <Menu pointing secondary vertical>
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='upravljanje'
                                active={activeItem === 'upravljanje'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='zaposleni'
                                active={activeItem === 'zaposleni'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='kompetencije'
                                active={activeItem === 'kompetencije'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='radna mjesta'
                                active={activeItem === 'radna mjesta'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='korisnici'
                                active={activeItem === 'korisnici'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='kontakt'
                                active={activeItem === 'kontakt'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='dokumentacija'
                                active={activeItem === 'dokumentacija'}
                                onClick={this.handleItemClick}
                            />
                        </Menu>
                    </Sidebar>
                    <Sidebar.Pusher style={{minHeight: '100vh'}}>
                        <Container>
                            <Menu attached='top' border none>
                                <Menu.Menu position='right'>
                                    <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
                                    <Menu.Item
                                        name='poruke'
                                        active={activeItem === 'messages'}
                                    />

                                    <Menu.Menu position='right'>
                                        <Dropdown item text='Jezici'>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>English</Dropdown.Item>
                                                <Dropdown.Item>Russian</Dropdown.Item>
                                                <Dropdown.Item>Spanish</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Menu.Menu>
                                    <div className='ui right aligned category search item'>
                                        <div className='ui transparent icon input'>
                                            <input
                                                className='prompt'
                                                type='text'
                                                placeholder='Search animals...'
                                            />
                                            <i className='search link icon' />
                                        </div>
                                        <div className='results' />
                                    </div>
                                    <Menu.Item>
                                        <Button basic color='red' content='Admin' />
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Button basic color='blue' content='Registracija' />
                                    </Menu.Item>
                                    <Menu.Item
                                        name='logout'
                                        active={activeItem === 'logout'}
                                        onClick={this.handleItemClick}
                                    />
                                </Menu.Menu>
                            </Menu>
                        </Container>
                        <Container>
                            <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                            </p>
     
                        </Container>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}

export default SidebarNav;