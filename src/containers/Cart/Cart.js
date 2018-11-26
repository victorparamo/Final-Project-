import React from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



const Cart = (props) => { 

  let total = 0;

  const { cart } = props;

  const getTable = (cart) => {
        let array = [];
        for (let item in cart){
          const obj = {image:cart[item].item.image,name:cart[item].item.name,quantity:cart[item].quantity, cost: cart[item].item.cost};
          array.push(obj);
          total += obj.quantity*obj.cost;
        }

        return (array.map((item,index)=>(
          <tr key={index}>
            <td>{index+1}</td>
            <td>
              <div>
                <img src={item.image} width="60px"/>
                <span>{item.name}</span>
              </div>  
            </td>
            <td>{item.quantity}</td>
            <td>{item.cost * item.quantity}</td>
          </tr>
        )))
  }

  return (
    <div>
      <Table borderless hover striped>
        <TableHead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </TableHead>
        <TableBody>
          {getTable(cart)}
        </TableBody>
      </Table>
      <h2>{total}</h2>
    </div>
  );
}
function mapStateToProps (state) {
    const { cart } = state;

    return { cart,
    };
};
  
function mapDispatchToProps (dispatch) {
  return bindActionCreators({  
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);