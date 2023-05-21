import React from 'react';
import { connect } from 'react-redux';

import { handleShoppingCart } from '../../store/actions/amiibosActions';

import './shoppingCart.css';

class ShoppingCart extends React.Component {

  render() {
    const {  shoppingCartMenu, cartItems } = this.props.state;
    return (
      <>
        { shoppingCartMenu &&
          <div className='shopping-cart-container'>
            <div className='shopping-cart-header'>
              <p>Carrito</p>
              <button onClick={()=> this.props.handleShoppingCart()}>Cerrar</button>
            </div>
          {
            cartItems?.length ?
              <div>
                <p>Tu pedido</p>
                <div className='checkout-item-titles'>
                  <p>Producto</p>
                  <p>Subtotal</p>
                </div>
                {cartItems?.map((item, index) => 
                  <div key={index} className='checkout-item-container'>
                    <div>{item.name}</div>
                    <div>$450</div>
                  </div>
                )}
                <div className='checkout-total'>
                  <p>Total</p>
                  <p> $3500</p>
                </div>
              </div> 
            : 
              <div>No hay items en el carrito</div>
          }
          </div>
        }
      </>
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