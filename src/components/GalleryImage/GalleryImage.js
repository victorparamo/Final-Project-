import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

const GalleryImage = (props) =>{

    const { name } = props;

    return (
            <div className="cardComponent">   
                <Card>
                    <CardImage
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                        waves
                    />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                        </CardText>
                        <Button href="#">Button</Button>
                    </CardBody>
                </Card>
            </div>
    );
};
  
export default GalleryImage;