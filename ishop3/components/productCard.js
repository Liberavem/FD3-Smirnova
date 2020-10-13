import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component{

render() {
    return(
      <div>
        <div>{this.props.product.name}</div>
        <div>lorem</div>
        <div>Price: {this.props.product.price}</div>
    </div>
    )
}

}

export default ProductCard;