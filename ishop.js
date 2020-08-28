var IShop = React.createClass({
 
    displayName : 'IShop',
    propTypes: {
      goods: React.PropTypes.array,
      title: React.PropTypes.string,
    },
    getDefaultProps: function() {
        return { title: "ПУСТО" }
      },

    render: function() {
     var goodsCard = [];
     var goodsCode = {};
      this.props.goods.forEach(element => {
   
          var product = element;
          goodsCode = 
          React.DOM.div({key: product.code, className: 'Product'},
          React.DOM.span({className: 'Name'}, product.name),
          React.DOM.span({className: 'Price'}, product.price),
          React.DOM.img({src: product.img, className: "Picture"}),
          React.DOM.span({className: 'Stock'}, product.stock),
         );
         goodsCard.push(goodsCode);
      });

    return React.DOM.div({className:'IShop'},
       React.DOM.div({className: 'GoodsList'}, this.props.title),
       React.DOM.div({className: 'Goods'}, goodsCard)
     );
    },
 
});