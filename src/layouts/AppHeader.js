import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function AppNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand='sm' color='dark' dark>
        <NavbarBrand>
          <img
            src={logo}
            alt='Short Link'
            style={{ height: '30px', borderRadius: '50%' }}
          />{' '}
          Short Link
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ms-auto' navbar>
            <NavItem>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
