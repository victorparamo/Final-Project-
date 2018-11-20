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
        return (
            Object.values(obj).map((item, index)=>(
                <GalleryImage 
                    key={index}
                    item={item}
                />
            ))
        )
    }

    render() {
        const { dataInventory, stateInventory } = this.props.inventory;

        return (
            <div className="GalleryContainer">
                {stateInventory === InventoryActions.types.INVENTORY_FETCHED ? this.renderImages(dataInventory) : ""}
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