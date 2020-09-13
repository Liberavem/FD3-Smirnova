var Product = React.createClass({

  displayName: 'Product',
  propTypes: {
    product: React.PropTypes.object
  },
  getDefaultProps: function () {
    return {
      goods: "ПУСТО",
    }
  },

  deleteEl: function () {
    this.props.deleteEl(this.props.product.code)
  },

  selectEl: function () {
    this.props.selectEl(this.props.product.code)

  },

  render: function () {
    return (React.DOM.tr({
        className: this.props.product.selected ? "Selected" : ""
      },
      React.DOM.td({
        onClick: this.selectEl
      }, this.props.product.name),
      React.DOM.td({
        onClick: this.selectEl
      }, this.props.product.price),
      React.DOM.td({
        onClick: this.selectEl
      }, React.DOM.img({
        src: this.props.product.img
      })),
      React.DOM.td({
        onClick: this.selectEl
      }, this.props.product.stock),
      React.DOM.td(null, React.DOM.button({
        onClick: this.deleteEl
      }, "Delete"))
    ))
  },

});