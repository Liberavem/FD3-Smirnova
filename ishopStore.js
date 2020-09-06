var Store = React.createClass({

  displayName: 'Store',
  propTypes: {
    title: React.PropTypes.array,
    goods: React.PropTypes.array
  },
  getDefaultProps: function () {
    return {
      title: "ПУСТО"
    }
  },

  getInitialState: function () {
    return {
      products: this.props.goods
    };
  },

  deleteEl: function deleteEl(code) {
    if (confirm("Удалить элемент?")) {
      this.setState({
        products: this.state.products.filter(el => el.code !== code)
      })
    }
  },

  selectEl: function selectEl(code) {
    this.setState({
      products: this.state.products.map(el => {
        if (el.code == code) {
          el.selected = true;
        } else {
          el.selected = false;
        }
        return el;
      })
    })
  },

  render: function () {
    return (
      React.DOM.table({
          className: "Table"
        },
        React.DOM.thead(null,
          React.DOM.tr(null,
            React.DOM.td(null, this.props.title.name),
            React.DOM.td(null, this.props.title.price),
            React.DOM.td(null, this.props.title.img),
            React.DOM.td(null, this.props.title.stock),
            React.DOM.td(null, this.props.title.control)
          )
        ),
        React.DOM.tbody(null,
          this.state.products.map(el => React.createElement(Product, {
            product: el,
            key: el.code,
            deleteEl: this.deleteEl,
            selectEl: this.selectEl
          }))
        )
      )
    );
  }
});