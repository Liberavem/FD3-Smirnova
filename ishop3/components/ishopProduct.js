import React from "react";
import PropTypes from "prop-types";

class Product extends React.Component {
  static propTypes = {
  product: PropTypes.object.isRequired,
 };

  deleteEl = () => {
    this.props.deleteEl(this.props.product.code);
  };

  selectEl = () => {
    this.props.selectEl(this.props.product.code);
  };

  edit = () => {
    this.props.edit(this.props.product);
  }

  render() {
    return (
      <tr className={this.props.product.selected ? "Selected" : ""}>
        <td onClick={this.selectEl}>{this.props.product.name}</td>
        <td onClick={this.selectEl}> {this.props.product.price} BYN</td>
        <td onClick={this.selectEl}>
          <img src={this.props.product.img} />
        </td>
        <td onClick={this.selectEl}>{this.props.product.stock} </td>
        <td>
          <button onClick={this.edit}>Edit</button>
        </td>
        <td>
          <button onClick={this.deleteEl}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Product;
