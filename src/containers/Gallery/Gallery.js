import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Gallery.css';
import GalleryImage from '../../components/GalleryImage';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images : [{name:"Image 1", image:"", id:"0001"},
                      {name:"Image 2", image:"", id:"0002"},
                      {name:"Image 3", image:"", id:"0003"},
                      {name:"Image 4", image:"", id:"0004"},
                      {name:"Image 5", image:"", id:"0005"},
                      {name:"Image 6", image:"", id:"0006"},
                      {name:"Image 7", image:"", id:"0007"},
                      {name:"Image 10", image:"", id:"0009"},
                      {name:"Image 11", image:"", id:"00010"}],
        };
    }

    renderImages(){
        return (
            this.state.images.map((item, index)=>(
                <GalleryImage 
                    key={index}
                    name={item.name}
                    image={item.image}
                />
            ))
        )
    }

    render() {   
        return (
            <div className="GalleryContainer">
                {this.renderImages()}
            </div>
        )
    }
};

function mapStateToProps (state) {
    const { LoginStatus, image, email, name } = state.login;

    return { LoginStatus, image, email, name };
};
  
// function mapDispatchToProps (dispatch) {
//     const { loginAuthorized, loginFailed } = loginActions.creators;

//     return bindActionCreators({ loginAuthorized, loginFailed, }, dispatch);
// };
  
export default connect(mapStateToProps, null)(Gallery);