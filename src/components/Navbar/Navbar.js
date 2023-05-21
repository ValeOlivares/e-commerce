import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

import { handleShoppingCart } from '../../store/actions/amiibosActions';

import './navbar.css'

class Navbar extends React.Component {

  render(){
    const { cartItems } = this.props.state;
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
                <ShoppingCartRoundedIcon sx={{color: "#fff"}} onClick={()=> this.props.handleShoppingCart()}/>
                <span className='shopping-cart-count'>{cartItems?.length}</span>
              </li>
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
