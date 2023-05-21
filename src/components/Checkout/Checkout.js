import React from 'react';
import { connect } from 'react-redux';

import './checkout.css'

class Checkout extends React.Component {

  render() {
    const {  cartItems, total } = this.props.state;
    return (
      <div className='checkout-container'>
        <p>Tu pedido</p>
        <div className='checkout-item-titles'>
          <p>Producto</p>
          <p>Subtotal</p>
        </div>
        {cartItems?.map((item, index) => 
          <div key={index} className='checkout-item-container'>
            <div>{item.name}</div>
            <div>{`$${item.price}`}</div>
          </div>
        )}
        <div className='checkout-total'>
          <p>Total</p>
          <p>{total}</p>
        </div>
      </div>
    )
  };
};

const mapStateToProps  = (state) => ({ state:state.amiibos});

export default connect(mapStateToProps)(Checkout);