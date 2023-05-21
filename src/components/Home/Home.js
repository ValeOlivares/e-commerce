import React from 'react';
import { connect } from 'react-redux';

import { getAmiibos, addToCart, handleTotal } from '../../store/actions/amiibosActions';

import Button from '@mui/material/Button';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import PageviewRoundedIcon from '@mui/icons-material/PageviewRounded';

import './home.css'

class Home extends React.Component {

  componentDidMount(){
    this.props.getAmiibos() 
  };

  render() {
    const { amiibos } = this.props.state;

    const handleAmiiboClick = (item) => {
      this.props.addToCart(item);
      this.props.handleTotal(item.price);
    };

    //TODO: paginate this
    //TODO: Localstorage
    //TODO: modal producto
    return (
      <div className='amiiboListContainer'>
        {amiibos?.map((amiibo) => 
          <div className="card" key= { amiibo.id }>
            <div className="card-content">
                <div className='card-image-container'>
                  <img src={amiibo.image} className='card-image'/>
                </div>
                <div className='card-info-container'>
                  <div className="card-title">{amiibo.name}</div>
                  <div className="card-price">
                    {`$${amiibo.price}`}
                  </div>
                  <div className='card-action-buttons'>
                    <FavoriteRoundedIcon className='cart-button'/>
                    <AddShoppingCartRoundedIcon onClick={()=>handleAmiiboClick(amiibo)} className='cart-button'/>
                    <PageviewRoundedIcon className='cart-button'/>
                  </div>
                </div> 
            </div>
          </div>
        )}
      </div>
    )
  };
};

const mapStateToProps  = (state) => ({ state:state.amiibos});

const mapDispatchToProps= (dispatch)=> { 
  return{
      getAmiibos: ()=> {dispatch(getAmiibos())},
      addToCart: (id)=>{dispatch(addToCart(id))},
      handleTotal: (price) =>{dispatch(handleTotal(price))}
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);