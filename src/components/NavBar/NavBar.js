import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Navbar color="red" dark expand="md" sticky="top">
                <NavbarBrand href="/">
                    <strong>Navbar</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = {() => this.onClick() } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                        <NavItem active>
                            <NavLink to="aboutUs">About us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="mission">Mission</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="gallery">Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="shoppingCart">Shopping Cart</NavLink>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle nav caret>Dropdown</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another Action</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                        <NavItem>
                        <form className="form-inline md-form mt-0">
                            <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                        </form>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        )
    }
};

// function mapStateToProps (state) {
//     // const { gifts, } = state;

//     // return { gifts, };
// };
  
// function mapDispatchToProps (dispatch) {
//     const { loginAuthorized, loginFailed } = loginActions.creators;

//     return bindActionCreators({ loginAuthorized, loginFailed, }, dispatch);
// };
  
export default connect(null, null)(NavBar);