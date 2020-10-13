import React from 'react';
import PropTypes from 'prop-types';

import Product from './ishopProduct.js';
import ProductCard from './productCard.js';
import AddProduct from './addProduct.js';
import EditProduct from './editProduct.js';


class Store extends React.Component{


 static propTypes = {
    title: PropTypes.object.isRequired,
    goods: PropTypes.array.isRequired
  };

  state = {
    products: this.props.goods,
    selected: null,
    productToEdit: {},
    isButtonNewProductShown: true,
    isAddNewProductShown: false,
    isEditProductShown: false
  }

  deleteEl = (code) =>  {
    if (confirm("Удалить элемент?")) {
      this.setState({
        products: this.state.products.filter(el => el.code !== code)
      })
    }
  }
 
 
  openEditProduct = (p) => {
    let openEditComponent = () => this.setState({
      productToEdit: p,
      isButtonNewProductShown: false,
      isAddNewProductShown: false,
      isEditProductShown: true
    });
    this.setState({isEditProductShown: false}, openEditComponent);
  }
 
  selectEl = (code) => {
    this.setState({
      selected : code,
      products: this.state.products.map(el => {
        if (el.code == code) {
          el.selected = true;
        } else {
          el.selected = false;
        }
        return el;
      })
    })
  }

  getProductById = () => {
    return this.state.products.find(p => p.code === this.state.selected);
  }

  addProduct = (product) => {
    this.setState({
      products: [...this.state.products, product]
    }, this.reset);
  }

  editProduct = (product) => {
    this.setState({
      products: [...this.state.products.filter(el => el.code !== product.code), product]
    }, this.reset)
  }

  showNewProductForm = () =>  {
      this.setState({
        isAddNewProductShown: true,
        isButtonNewProductShown: false
      });
  }

  reset = () =>  {
    this.setState({
      isAddNewProductShown: false,
      isButtonNewProductShown: true,
      isEditProductShown: false
    });
  }

 newProductId = () => {
   const max = this.state.products.reduce((prev, current) => (prev.code > current.code) ? prev : current).code;
   return max + 1;
 }

  render() {
    return (
      <div>
      <table className = "Table">
        <thead>
          <tr>
            <td>{this.props.title.name}</td>
            <td>{this.props.title.price}</td>
            <td>{this.props.title.img}</td>
            <td>{this.props.title.stock}</td>
            <td>{this.props.title.control}</td>
          </tr>
        </thead>
      <tbody>{this.state.products.map(el => <Product
            edit={this.openEditProduct}
            product={el}
            key={el.code}
            deleteEl= {this.deleteEl}
            selectEl= {this.selectEl}
          />)}
    </tbody>
    </table>
    {this.state.isButtonNewProductShown ? <button onClick={this.showNewProductForm}>New Product</button> : ""}
    {this.state.selected ?  <ProductCard product={this.getProductById()}/> : "" }
    {this.state.isAddNewProductShown ? <AddProduct cancel={this.reset} add={this.addProduct} code={this.newProductId()}/> : ""}
    {this.state.isEditProductShown ? <EditProduct product={this.state.productToEdit} cancel={this.reset} edit={this.editProduct}/> : ""}
    </div>
    )
  }
};

export default Store;