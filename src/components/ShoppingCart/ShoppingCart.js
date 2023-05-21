import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { handleShoppingCart } from '../../store/actions/amiibosActions';

import './shoppingCart.css';

class ShoppingCart extends React.Component {

  render() {
    const {  shoppingCartMenu, cartItems } = this.props.state;
    return (
      <div className={ shoppingCartMenu ? 'shopping-cart-container active' : 'shopping-cart-container'}>
        <div className='shopping-cart-header'>
          <p>Carrito</p>
          <Button onClick={()=> this.props.handleShoppingCart()}>Cerrar</Button>
        </div>
      {
        cartItems?.length ?
          <>
            {cartItems?.map((item, index) => 
            // TODO: pass to  li
              <div key={index} className='shopping-cart-item-container'>
                <img src={item.image} className='shopping-image'></img>
                <div className='shopping-information'>
                  <div>{item.name}</div>
                  <div className='quantity'>
                    <RemoveIcon/>
                    <p>1</p>
                    <AddIcon/>
                  </div>
                </div>
                <div>{item.price}</div>
              </div>
            )}
            <div className='shopping-total'>
              <p>Total</p>
              <p> $3500</p>
            </div>
          </> 
        : 
          <div>No hay items en el carrito</div>
      }
      </div>
    )
  };
};

const mapStateToProps  = (state) => ({ state:state.amiibos});
const mapDispatchToProps= (dispatch)=> { 
  return{
      handleShoppingCart: ()=> {dispatch(handleShoppingCart())},
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);