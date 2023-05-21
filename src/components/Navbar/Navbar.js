import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { handleShoppingCart } from '../../store/actions/amiibosActions';

import './navbar.css'

class Navbar extends React.Component {
  
  render(){
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            Logo
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                <Link to="/">Tienda</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
              <li onClick={()=> this.props.handleShoppingCart()}>Carrito</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
};

const mapStateToProps  = (state) => ({ state:state.amiibos});

const mapDispatchToProps= (dispatch)=> { 
  return{
      handleShoppingCart: ()=> {dispatch(handleShoppingCart())},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
