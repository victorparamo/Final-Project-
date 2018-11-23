import React from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Cart = (props) => {

  const { cart } = props;

  console.log("---Cart---->", cart);

  return (
    <Table borderless hover striped>
      <TableHead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Handle</th>
        </tr>
      </TableHead>
      <TableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>@twitter</td>
        </tr>
      </TableBody>
    </Table>
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