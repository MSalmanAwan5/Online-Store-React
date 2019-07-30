import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import {Link,NavLink} from 'react-router-dom'
  import components from '../components/cart'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navbar-grd">
        <Navbar style={{position:'sticky'}}expand='lg' light>
          <NavbarBrand href="/" className="text-white">My Online Shop</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className='mr-2'/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="mr-3" style={{
                    fontWeight: "bold",
                    color: "white"}}
                to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <a className="mr-3" style={{
                    fontWeight: "bold",
                    color: "white"}}
                href="/#products">Products</a>
              </NavItem>
              <NavItem>
                <NavLink className="mr-3" style={{
                    fontWeight: "bold",
                    color: "white"}} to="/cart">Cart<Badge className='p-2 ml-1'><components.TotalQuantity/></Badge></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="mr-5" style={{
                    fontWeight: "bold",
                    color: "white"}} to="/checkout">
                      Checkout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}