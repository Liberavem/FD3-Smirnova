import React from 'react';
import PropTypes from 'prop-types';

class EditProduct extends React.Component{

    state = {
        product: {
          code: this.props.product.code,
          name: this.props.product.name,
          price: this.props.product.price,
          img: this.props.product.img,
          stock: this.props.product.stock,
          selected: this.props.product.selected
        },
        isNameValid: true,
        isPriceValid: true,
        isUrlValid: true,
        isQtyValid: true
    }

    

    updateProductName = (event) => {
        let p = this.state.product;
        p.name = event.target.value;
        let validation = p.name.trim().length > 0;
        this.setState({product: p, isNameValid: validation});
      }
      
      updateProductPrice = (event) => {
        let p = this.state.product;
        p.price = event.target.value;
        let validation = Number(p.price) > 0;
        this.setState({product: p, isPriceValid: validation});
      }
      
      updateProductUrl = (event) => {
        let p = this.state.product;
        p.img = event.target.value;
        let validation = this.isUrl(p.img);
        this.setState({product: p, isUrlValid: validation});
      }
      
      updateProductQty = (event) => {
        let p = this.state.product;
        p.stock = event.target.value;
        let validation = /^\d+$/.test(p.stock);
        this.setState({product: p, isQtyValid: validation});
      }
      
      isUrl = str => {
        try { return Boolean(new URL(str)); }
        catch(e){ return false; }
      }
      
      isEditProductEnabled = () => {
        return this.state.isNameValid && this.state.isPriceValid && this.state.isUrlValid && this.state.isQtyValid;
      }
      

    render() {
        return(
          <div>
           <h2>Edit existing product</h2>
            <table> 
            <tbody>
              <tr>
              <td>ID</td>
                <td>{this.state.product.code}</td>
              </tr>
              <tr>
                <td>NAME</td>
                <td><input value={this.state.product.name} type="text" onInput={this.updateProductName}/></td>
                <td><span className={this.state.isNameValid ? "hidden" : ""}>Please, fill the field. Value must be a string</span></td>
              </tr>
              <tr>
                <td>PRICE</td>
                <td><input value={this.state.product.price}type="text" onInput={this.updateProductPrice}/></td>
                <td><span className={this.state.isPriceValid ? "hidden" : ""}>Please, fill the field. Value must be a relational number greater then 0</span></td>
              </tr>
              <tr>
                <td>URL</td>
                <td><input value={this.state.product.img} type="text" onInput={this.updateProductUrl}/></td>
                <td><span className={this.state.isUrlValid ? "hidden" : ""}>Please, fill the field. Value must be a valid URL</span></td>
              </tr>
              <tr>
                <td>Quntity</td>
                <td><input value={this.state.product.stock} type="text" onInput={this.updateProductQty}/></td>
                <td><span className={this.state.isQtyValid ? "hidden" : ""}>Please, fill the field. Value must be a positive integer</span></td>
              </tr>
              <tr>
                <td><button disabled={!this.isEditProductEnabled()} onClick={() => this.props.edit(this.state.product)}>Edit</button></td>
                <td><button onClick={this.props.cancel}>Cancel</button></td>
                <td></td>
              </tr>
              </tbody>
            </table>
        </div>
        )
    }
}

export default EditProduct;