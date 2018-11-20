import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import CartActions from '../../redux/actions/Cart_Actions';

const GalleryImage = (props) =>{

    const { addToCart,
            removeFromCart,
            item,
    } = props;

    console.log("-----Item------>", item);

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
                        <Button className={item.amount > 0 ? "":"disabled"} href="#">Button</Button>
                    </CardBody>
                </Card>
            </div>
    );
};

function mapDispatchToProps (dispatch) {
    const { addToCart, removeFromCart } = CartActions.creators;

    return bindActionCreators({ addToCart, 
        removeFromCart  
    }, dispatch);
};
  
export default connect(null, mapDispatchToProps)(GalleryImage);