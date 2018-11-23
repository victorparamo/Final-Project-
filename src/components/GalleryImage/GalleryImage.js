import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, CardBody, CardImage, CardTitle, CardText,
         Modal, ModalBody, ModalHeader, ModalFooter,
         Col, Row
} from 'mdbreact';
import CartActions from '../../redux/actions/Cart_Actions';
import InventoryActions from '../../redux/actions/Inventory_Actions';

import './GalleryImages.css';

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

    removeFromInventory(key, item){
        this.props.removeFromInventory({key,item});
        this.toggle();
    }

    render(){
        const { addToCart,
                item, keyFirebase,
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
                        <Button className={item.amount > 0 ? "":"disabled"} onClick={() => this.toggle()}>More Info...</Button>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={() => this.toggle()} centered size="lg">
                    <ModalHeader toggle={() => this.toggle()}>{item.name}</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col xs="7">
                                <img src={item.image} className="img-fluid" alt="Responsive image" />
                            </Col>
                            <Col xs="5" className="mx-auto">
                                <div className="InfoModal">
                                    <p><strong>Author:   </strong>{item.author}</p>
                                    <p><strong>Price:   </strong>{item.cost}</p>
                                    <p><strong>Period:   </strong>{item.period}</p>
                                    <p><strong>Amount:   </strong>{item.amount}</p>
                                </div>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter className="mt-3">
                        <Button color="secondary" className="mt-2" onClick={() => this.removeFromInventory(keyFirebase, item)}>Add to Cart</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
};

function mapDispatchToProps (dispatch) {
    const { addToCart, removeFromCart } = CartActions.creators;
    const { removeFromInventory } = InventoryActions.creators;

    return bindActionCreators({ addToCart, 
                                removeFromInventory, 
                            }, dispatch);
};
  
export default connect(null, mapDispatchToProps)(GalleryImage);