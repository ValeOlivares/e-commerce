import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { handleShoppingCart, handleAdd } from '../../store/actions/amiibosActions';

import './shoppingCart.css';

class ShoppingCart extends React.Component {

  render() {
    const {  shoppingCartMenu, cartItems, total } = this.props.state;
    return (
      <div className={ shoppingCartMenu ? 'shopping-cart-container active' : 'shopping-cart-container'}>
        <div className='shopping-cart-header'>
          <p>Carrito</p>
          <Button onClick={()=> this.props.handleShoppingCart()}>Cerrar</Button>
        </div>
      {
        cartItems?.length ?
          <>
            <ul className='shopping-cart-list'>
            {cartItems?.map((item, index) => 
              <li key={index} className='shopping-cart-item-container'>
                <img src={item.image} className='shopping-image'></img>
                <div className='shopping-information'>
                  <div>{item.name}</div>
                  <div className='quantity'>
                    <RemoveIcon />
                    <p>{item.qty}</p>
                    <AddIcon onClick={()=> this.props.handleAdd(item.id)}/>
                  </div>
                </div>
                <div>{`$${item.price * item.qty}`}</div>
              </li>
            )}
            </ul>
            <div className='shopping-total'>
              <p>Total</p>
              <p> {`$${total}`}</p>
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
      handleAdd: (item) =>{dispatch(handleAdd(item))},
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);