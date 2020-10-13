"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Store from './components/ishopStore';


let title = {
    name: "Name",
    price: "Price",
    img: "URL",
    stock: "Quantity",
    edit: "Edit",
    delete: "Delete"
};

let goodsArr =  require('./products.json');

ReactDOM.render(
  <Store 
    title={title}
    goods={goodsArr}
  />
  , document.getElementById('container') 
);
