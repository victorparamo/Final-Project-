import React from 'react';
import './AboutUs.css';
import { Card, CardBody, Fa, CardImage, CardHeader, CardUp, Avatar } from 'mdbreact';
import Frida from '../../images/AboutUs/frida.png';
import b1 from '../../images/AboutUs/c1.JPG';
import Paramo from '../../images/AboutUs/param.png';
import b2 from '../../images/AboutUs/c2.JPG';
import Gille from '../../images/AboutUs/gille.png';
import b3 from '../../images/AboutUs/c3.JPG';
import Malo from '../../images/AboutUs/malo.png';
import b4 from '../../images/AboutUs/c4.JPG';
import Mau from '../../images/AboutUs/mau.png';
import b5 from '../../images/AboutUs/c5.JPG';

const CardAbout = (props) =>{
    const { ImageTop, 
            ImagePerson,
            name,
            role,
    } = props;

    return (
        <Card className="CardAboutUs indigo accent-3">
            <CardHeader>
                <CardImage
                    className="card-img-top white"
                    src={ImageTop}
                />
                <img
                    className="ImageCard mx-auto rounded-circle"
                    src={ImagePerson}
                />
            </CardHeader>
            <CardBody>
                <h4 className="font-weight-bold mb-3 white-text">{name}</h4>
                <p className="font-weight-bold white-text">{role}</p>
            </CardBody>
        </Card>
    )
}


const About = () =>{

    return (
        <div className="aboutUsContainer">
            <div className= "titu">
                <p>About Us</p>
            </div>
            <div className= "contenido">
                <p>We are an Art Studio searching for a union between artist and art buyers.</p>
                <p>Our team is passionate of technology and art, and decided to create this page, to find a home for this master pieces.</p>
            </div>
            <div className= "equipo">
                <p>Meet the team</p>
            </div>
            <div className="frontoffice">
                <p>FrontOffice</p>
            </div>
            <div className="frontOffice">   
                <CardAbout 
                    ImageTop={b1}
                    ImagePerson={Frida}
                    name={"Frida Arroyo"}
                    role={"ISDR"}
                />
                <CardAbout 
                    ImageTop={b2}
                    ImagePerson={Paramo}
                    name={"Víctor Páramo"}
                    role={"ISDR"}
                />
            </div>
            <div className="backoffice">
                <p>BackOffice</p>
            </div>
            <div className="BackOffice">   
                <CardAbout 
                    ImageTop={b3}
                    ImagePerson={Gille}
                    name={"Guillermo Pérez"}
                    role={"ISC"}
                />
                <CardAbout 
                    ImageTop={b4}
                    ImagePerson={Malo}
                    name={"Mauricio Pérez"}
                    role={"ISC"}
                />
                <CardAbout 
                    ImageTop={b5}
                    ImagePerson={Mau}
                    name={"José Antonio Malo"}
                    role={"ISC"}
                />
            </div>
        </div>
    )
}

export default About;