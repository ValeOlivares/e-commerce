import React from 'react';
import { connect } from 'react-redux';

import { getAmiibos, addToCart } from '../../store/actions/amiibosActions';

import Button from '@mui/material/Button';

import './home.css'

class Home extends React.Component {
  componentDidMount(){
    this.props.getAmiibos() 
  };

  render() {
    const { amiibos, cartItems } = this.props.amiibos;
    console.log("cart", cartItems)

    const handleAmiiboClick = (item) => {
      this.props.addToCart(item)
    };

    return (
      <div className='amiiboListContainer'>
        {amiibos?.amiibo?.map((amiibo, index) => 
          <div className="card" key= {index }>
            <div className="card-content">
                <div className='card-image-container'>
                  <img src={amiibo.image} className='card-image'/>
                </div>
                <div className="card-title">{amiibo.name}</div>
                <div className="card-price">
                  $450
                </div>
                <Button onClick={()=>handleAmiiboClick(amiibo)}>Comprar</Button>
            </div>
            
          </div>
        )}
      </div>
    )
  };
};

const mapStateToProps  = (state) => ({ amiibos:state.amiibos, cartItems: state.cartItems});

const mapDispatchToProps= (dispatch)=> { 
  return{
      getAmiibos: ()=> {dispatch(getAmiibos())},
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);