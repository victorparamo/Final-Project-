import React, { Component } from 'react';
import LoginActions from '../../redux/actions/Login_Actions';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class NavBarButton extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,    
        };
    }

    toggle() {
        this.setState({
            "modal": !this.state.modal
        });
    }

    render(){

        const { LoginStatus, 
                image, 
                email, 
                name  
        } = this.props;

        return (
            <div>   
                <button className="btn btn-circle" onClick={() => this.toggle()}>
                    {(LoginStatus === LoginActions.types.LOGIN_AUTHORIZED && <img className="NavBarImage" src={image} alt="Italian Trulli" />)}
                </button>
                <Modal isOpen={this.state.modal} toggle={() => this.toggle()} side position="top-right">
                    <ModalHeader toggle={() => this.toggle()}>
                        <p>Welcome!</p>
                        {(LoginStatus === LoginActions.types.LOGIN_AUTHORIZED && <img className="NavBarImage" src={image} alt="Italian Trulli" />)}
                    </ModalHeader>
                    <ModalBody>
                        <p>{email}</p>
                        <p>{name}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="cyan darken-3" onClick={() => this.toggle()}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
    

};
  
export default NavBarButton;