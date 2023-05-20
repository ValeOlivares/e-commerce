import React from 'react'
import { connect } from 'react-redux'
import { getAmiibos } from '../../store/actions/amiibosActions'

class Shop extends React.Component {
  componentDidMount(){
    this.props.getAmiibos() 
  };

  render() {
    const {amiibos} = this.props.amiibos
    return (
      <div>
        {amiibos?.amiibo?.map(amiibo => 
          <div key={amiibo.id}>
            <h6 >{amiibo.name}</h6> 
          </div>
        )};
      </div>
    )
  };
};

const mapStateToProps  = (state) => ({amiibos:state.amiibos})
export default connect(mapStateToProps, {getAmiibos})(Shop)