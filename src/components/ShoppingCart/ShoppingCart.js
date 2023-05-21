import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { handleShoppingCart, handleAdd, handleRemove } from '../../store/actions/amiibosActions';

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
                    <RemoveCircleIcon sx={{color: "#ff3224"}} onClick={()=> this.props.handleRemove(item.id)}/>
                    <p>{item.qty}</p>
                    <AddCircleIcon sx={{color: "#ff3224"}} onClick={()=> this.props.handleAdd(item.id)}/>
                  </div>
                </div>
                <div>{`$${item.price * item.qty}`}</div>
              </li>
            )}
            </ul>
            <div className='shopping-cart-footer'>
              <div className='shopping-cart-total'>
                <p>Total</p>
                <p> {`$${total}`}</p>
              </div>
                <Link to="/checkout">
                  <Button onClick={()=> this.props.handleShoppingCart()} >Finalizar compra</Button>
                </Link>
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
      handleAdd: (id) =>{dispatch(handleAdd(id))},
      handleRemove: (id) => {dispatch(handleRemove(id))}
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);