import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './NavBar.css'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler,
         NavItem, NavLink,
         Collapse, 
         Dropdown, DropdownToggle, DropdownMenu, DropdownItem 
} from 'mdbreact';

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
        const { isWideEnough,
                collapse, 
        } = this.state;

        const { item, LoginStatus } = this.props;
        
        console.log("------>", LoginStatus);
        return (
            <Navbar color="red" dark expand="md" sticky="top">
                <NavbarBrand href="/">
                    <strong>Navbar</strong>
                </NavbarBrand>
                { !isWideEnough && <NavbarToggler onClick = {() => this.onClick() } />}
                <Collapse isOpen = { collapse } navbar>
                    <NavbarNav left>
                        <NavItem className={item === "aboutUs" ? "active" : ""}>
                            <NavLink to="aboutUs">About us</NavLink>
                        </NavItem>
                        <NavItem className={item === "mission" ? "active" : ""}>
                            <NavLink to="mission">Mission</NavLink>
                        </NavItem>
                        <NavItem className={item === "gallery" ? "active" : ""}>
                            <NavLink to="gallery">Gallery</NavLink>
                        </NavItem>
                        <NavItem className={item === "shoppingCart" ? "active" : ""}>
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
                         <button className="btn btn-circle"></button>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        )
    }
};

function mapStateToProps (state) {
    const { LoginStatus, } = state.login;

    return { LoginStatus, };
};
  
// function mapDispatchToProps (dispatch) {
//     const { loginAuthorized, loginFailed } = loginActions.creators;

//     return bindActionCreators({ loginAuthorized, loginFailed, }, dispatch);
// };
  
export default connect(mapStateToProps, null)(NavBar);