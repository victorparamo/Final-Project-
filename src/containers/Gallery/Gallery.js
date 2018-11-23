import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Gallery.css';
import GalleryImage from '../../components/GalleryImage';
import InventoryActions from '../../redux/actions/Inventory_Actions';

class Gallery extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchInventory();
    }

    renderImages(obj){
            let index, data;
            let infoImage=[], images = [];
            let object = {};

            for(let key in obj){
                index=key;
                data=obj[key];
                object={key:index, data}
                images.push(object);
            }

            return (
                images.map((item, index)=>(
                        <GalleryImage 
                            key={index}
                            item={item.data}
                            keyFirebase={item.key}
                        /> 
                ))
            )
    }

    render() {
        const { dataInventory, stateInventory } = this.props.inventory;

        return (
            <div className="GalleryContainer">
                <div className="sloganGallery">Gallery</div>
                <div className="picsContainer">
                    {stateInventory === InventoryActions.types.INVENTORY_FETCHED ? this.renderImages(dataInventory) : ""}
                </div>
            </div>
        )
    }
};

function mapStateToProps (state) {
    const { LoginStatus, image, email, name } = state.login;
    const { inventory } = state;

    return { LoginStatus, image, email, name, 
             inventory,
    };
};
  
function mapDispatchToProps (dispatch) {
    const { fetchInventory } = InventoryActions.creators;

    return bindActionCreators({ 
        fetchInventory, 
    }, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);