import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, CardBody, CardImage, CardTitle, CardText,
         Modal, ModalBody, ModalHeader, ModalFooter
} from 'mdbreact';
import CartActions from '../../redux/actions/Cart_Actions';

class GalleryImage extends Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
    }

    toggle() {
        this.setState({
          "modal": !this.state.modal
        });
    }

    render(){
        const { addToCart,
                removeFromCart,
                item,
        } = this.props;

        return (
            <div className="cardComponent">   
                <Card>
                    <CardImage
                        className="img-fluid"
                        src={item.image}
                        waves
                    />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <Button className={item.amount > 0 ? "":"disabled"} onClick={() => this.toggle()}>Button</Button>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={() => this.toggle()} centered>
                    <ModalHeader toggle={() => this.toggle()}>{item.name}</ModalHeader>
                    <ModalBody>
                        <img src={item.image} className="img-fluid" alt="Responsive image" /> 
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => this.toggle()}>Close</Button>
                        <Button color="primary">Save changes</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
};

function mapDispatchToProps (dispatch) {
    const { addToCart, removeFromCart } = CartActions.creators;

    return bindActionCreators({ addToCart, 
        removeFromCart  
    }, dispatch);
};
  
export default connect(null, mapDispatchToProps)(GalleryImage);