import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './NavBar.css'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler,
         NavItem, NavLink,
         Collapse, 
} from 'mdbreact';
import NavBarButton from '../../components/NavBarButton';

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

        const { item, 
                LoginStatus, image, email, name,
        } = this.props;
        
        return (
            <Navbar color="stylish-color" dark expand="md" sticky="top">
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
                    </NavbarNav>
                    <NavbarNav right>
                        <NavItem>
                            <NavBarButton 
                                LoginStatus={LoginStatus}
                                image={image}
                                email={email}
                                name={name}
                                />
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        )
    }
};

function mapStateToProps (state) {
    const { LoginStatus, image, email, name } = state.login;

    return { LoginStatus, image, email, name };
};
  
export default connect(mapStateToProps, null)(NavBar);