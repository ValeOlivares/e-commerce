import React from 'react';
import { connect } from 'react-redux';
import { getAmiibos, addToCart } from '../../store/actions/amiibosActions';

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
      <div>
        {amiibos?.amiibo?.map(amiibo => 
          <div key={amiibo.id}>
            <button onClick={() => handleAmiiboClick(amiibo)}> {amiibo.name} </button> 
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